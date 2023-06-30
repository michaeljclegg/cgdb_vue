//! various FB collections and documents functions to use ( check)
//? see->
// https://modularfirebase.web.app/common-use-cases/firestore/

import { db } from "@/firebase/index";
import { collection, getDocs, getDoc, doc } from "firebase/firestore";

// --------------------------------------------------
//! Get a Document
const myCol = collection(db, "artwork");
console.log("myCol: ", myCol);

const docRef = doc(db, "artwork", "KvYB6qzI8LnBIWqf3X4M");
(async () => {
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
})();

// --------------------------------------------------
//! Listen to a Document
import { doc, onSnapshot } from "firebase/firestore";

const unsub = onSnapshot(doc(db, "cities", "SF"), (doc) => {
  console.log("Current data: ", doc.data());
});
// --------------------------------------------------

//! Get a collection
import { collection, getDocs } from "firebase/firestore";

const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});

// --------------------------------------------------------

//! get documents id with an IFFE function
(async () => {
  const querySnapshot = await getDocs(collection(db, "posts"));
  querySnapshot.forEach((doc) => {
    console.log(`see this: ${doc.id} => ${doc.data()}`);
  });
})();

// --------------------------------------------------

//! get collection reference (postList) - previous method is better...getDocs')
const getPosts = async () => {
  const postCol = collection(db, "posts");
  const postSnapshot = await getDocs(postCol);
  //const postList = postSnapshot.docs.map((doc) => doc.data());
  // to get additional id field use spread operator with custom mapping of id (id: doc.id)
  const postList = postSnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  console.log(postList);
  return postList;
};

// --------------------------------------------------

//! Set a document
import { collection, doc, setDoc } from "firebase/firestore";

// Add a new document with a generated id
const newCityRef = doc(collection(db, "cities"));

// later...
await setDoc(newCityRef, data);

// --------------------------------------------------
//! get document keys (field names) of a Firebase document
// import from firebase (including the db ref!)
import { collection, query, getDocs, doc } from "firebase/firestore";
// set up query - collection name can be passed as variable
let q = query(collection(db, "posts"), limit(1));
// You need to use async/await when calling on Firestore
const getDocKeys = async () => {
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    docKeys.value = Object.keys(doc.data());
    console.log(docKeys);
    // You can go further & push result to array and sort if needed...
  });
};
// run function...
getDocKeys();

//! Object.keys Object.values Object.entries
// can use Object.values OR Object.keys OR Object.entries (for both keys and values)
// also via destructure
// const locationArray = Object.entries(locationCount) // nested array-> [array(2), [Array(2)]...
// let newCleanArray = []
// locationArray.forEach(([key, value]) => {
//   newCleanArray.push(key + " - " + value);}); // destructure into new array

// -------------------------------------------------

//! Delete Document

import { doc, deleteDoc } from "firebase/firestore";

await deleteDoc(doc(db, "cities", "DC"));

// ----------------------------------------------------

//! Delete field from Document
import { doc, updateDoc, deleteField } from "firebase/firestore";

const cityRef = doc(db, "cities", "BJ");

// Remove the 'capital' field from the document
await updateDoc(cityRef, {
  capital: deleteField(),
});

// -----------------------------------------------------
//! Update field

import { doc, updateDoc } from "firebase/firestore";

const washingtonRef = doc(db, "cities", "DC");

// Set the "capital" field of the city 'DC'
await updateDoc(washingtonRef, {
  capital: true,
});

// ------------------------------------------------------

// Update a document with an Array
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";

const washingtonRef = doc(db, "cities", "DC");

// Atomically add a new region to the "regions" array field.
await updateDoc(washingtonRef, {
  regions: arrayUnion("greater_virginia"),
});

// Atomically remove a region from the "regions" array field.
await updateDoc(washingtonRef, {
  regions: arrayRemove("east_coast"),
});

// -------------------------------------------------
//! Query a collection

import { collection, query, where, getDocs } from "firebase/firestore";

const q = query(collection(db, "cities"), where("capital", "==", true));

const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});

// -------------------------------------------------
//! Query a collection with onSnapshot (Listening to changes)

import { collection, query, where, onSnapshot } from "firebase/firestore";

const q = query(collection(db, "cities"), where("state", "==", "CA"));
const unsubscribe = onSnapshot(q, (querySnapshot) => {
  const cities = [];
  querySnapshot.forEach((doc) => {
    cities.push(doc.data().name);
  });
  console.log("Current cities in CA: ", cities.join(", "));
});

// --------------------------------------------------
//! Query a collection with multiple clauses

// Will return all Springfields
import { collection, query, orderBy, startAt } from "firebase/firestore";
const q1 = query(
  collection(db, "cities"),
  orderBy("name"),
  orderBy("state"),
  startAt("Springfield")
);

// Will return "Springfield, Missouri" and "Springfield, Wisconsin"
const q2 = query(
  collection(db, "cities"),
  orderBy("name"),
  orderBy("state"),
  startAt("Springfield", "Missouri")
);

//-------------------------------------------------------
//! Group by Query / add async to func.
import { collectionGroup, query, where, getDocs } from "firebase/firestore";

const museums = query(
  collectionGroup(db, "landmarks"),
  where("type", "==", "museum")
);
const querySnapshot = await getDocs(museums);
querySnapshot.forEach((doc) => {
  console.log(doc.id, " => ", doc.data());
});

// ------------------------------------------------------
//! write & move!!

import { db } from "../boot/firebase";
import { collection, getDocs, getDoc, doc, addDoc } from "firebase/firestore";

const addNewDoc = async () => {
  //? Add a new document with a generated id.
  const docRef = await addDoc(collection(db, "posts"), {
    caption: "Open Public Library #2",
    locationCity: "Some city",
    note: "I hope this works",
  });
  console.log("Document written with ID: ", docRef.id);
};

//* ----------------------------------------------------
//! timestamp methods

import { Timestamp, serverTimestamp } from "firebase/firestore";
const myTime = Timestamp.fromDate(new Date("December 10, 1815"));
console.log(myTime);

// Update the timestamp field with the value from the server
// const updateTimestamp = await updateDoc(docRef, {
//    timestamp: serverTimestamp() });;
const getTime = async () => {
  const gTimestamp = await { timestamp: serverTimestamp() };
  console.log("gTimestamp: ", gTimestamp);
  return gTimestamp;
};
getTime();

// -------------------------------------------------------
//! combine two params and join them - 2 Where clauses... (WEB VERSION 8 ALERT)
// Reference to the Firestore collection
let collectionReference = collection(db, "collectionName");

// Query the collection for condition1
collectionReference.where("fieldName", "==", "value1")
  .get()
  .then(querySnapshot1 => {
    let docs1 = querySnapshot1.docs;

    // Query the collection for condition2
    collectionReference.where("fieldName", "==", "value2")
      .get()
      .then(querySnapshot2 => {
        let docs2 = querySnapshot2.docs;

        // Combine the results from both queries
        let combinedDocs = [...docs1, ...docs2];
        console.log(combinedDocs);
      })
      .catch(error => {
        console.log("Error getting documents: ", error);
      });
  })
  .catch(error => {
    console.log("Error getting documents: ", error);
  });

//----------------------------------------------------------
//! change ALL entries to Lowercase ...
/*   This will change the case of the "fieldName" field in all the documents of the "collectionName" collection to lowercase. */
// Reference to the Firestore collection

let collectionReference = collection(db, "collectionName");

// Get all the documents in the collection
collectionReference.get()
  .then(querySnapshot => {
    querySnapshot.forEach(doc => {
      let data = doc.data();
      let lowerCaseField = data.fieldName.toLowerCase();

      // Update the document with the modified field
      doc.ref.update({ fieldName: lowerCaseField })
        .then(() => {
          console.log("Document updated successfully");
        })
        .catch(error => {
          console.log("Error updating document: ", error);
        });
    });
  })
  .catch(error => {
    console.log("Error getting documents: ", error);
  });

  //-----------------------------------------------------------
//! Duplicate table
/*   In this example, the duplicateCollection() function takes the paths of the original collection and the duplicate collection as input. It retrieves the documents from the original collection using get() and then creates new documents in the duplicate collection using set().

Remember to replace 'originalCollection' and 'duplicateCollection' with the actual paths of your collections.. */

  const admin = require('firebase-admin');
const serviceAccount = require('path/to/serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// Function to duplicate a collection
async function duplicateCollection(originalCollectionPath, duplicateCollectionPath) {
  const originalCollectionRef = db.collection(originalCollectionPath);
  const duplicateCollectionRef = db.collection(duplicateCollectionPath);

  const snapshot = await originalCollectionRef.get();

  snapshot.forEach((doc) => {
    const data = doc.data();
    duplicateCollectionRef.doc(doc.id).set(data);
  });
}

// Usage example
duplicateCollection('originalCollection', 'duplicateCollection')
  .then(() => {
    console.log('Collection duplicated successfully!');
  })
  .catch((error) => {
    console.error('Error duplicating collection:', error);
  });
//--------------------------------------------------------
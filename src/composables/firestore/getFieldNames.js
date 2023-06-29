//  final docRef = db.collection("cities").doc("SF");
// docRef.get().then(
//   (DocumentSnapshot doc) {
//     final data = doc.data() as Map<String, dynamic>;
//     final keys = data.keys; // 👈
//     // ...
//   },
//   onError: (e) => print("Error getting document: $e"),
// );
//  import { getFirestore } from "firebase/firestore"
// const db = firebase.Firestore()
//! get document keys (field names) of a Firebase document
// import from firebase (including the db ref!)
import { collection, query, getDocs, doc, db } from "firebase/firestore";
// set up query - collection name can be passed as variable
let q = query(collection(db, "artworks_cg"), limit(1));
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

//NOTE does not seem to work 
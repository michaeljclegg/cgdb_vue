//* clean version - no async
import { ref, watchEffect } from "vue";
// import { db } from "@/firebase/index";
import { getFirestore } from "firebase/firestore"
import {
  collection,
  onSnapshot,
  query,
  orderBy,
  limit,
  where,
} from "firebase/firestore";

const db = getFirestore()
let colRef: any
const documents = ref(null);
const getCollection = (col: string, xquery: string) => {
  // console.log("collection name: ", col);

  //! add logic in calling form to specify cityShoot params... this is a test...
  if (xquery) {
    colRef = query(collection(db, col), where("cityShoot", "==", xquery), orderBy("index", "asc"))
    //! note the 25 limit parameter...
  } else {
    colRef = query(collection(db, col), orderBy("index", "asc"), limit(25));
  }

  console.log(colRef);

  const unsub = onSnapshot(colRef, (snapshot: any) => {
    let results: any = [];
    snapshot.docs.forEach((doc) => {
      results.push({ ...doc.data(), id: doc.id });
    });

    documents.value = results;
  });

  watchEffect((onInvalidate) => {
    onInvalidate(() => unsub());
  });

  //ONE TIME - works but no sort - 
  //(need to add <getDocs> to import from firestore)
  //! start
  // const newF = async () => {
  //   let results: any = [];
  //   const querySnapshot = await getDocs(collection(db, col))
  //   querySnapshot.forEach((doc) => {
  //     results.push({ ...doc.data(), id: doc.id });
  //     // console.log(`${doc?.id} => ${doc.data()}`)
  //   })
  //   documents.value = results
  // }
  // newF() //activate func.
  //! end
  return { documents };
};

export default getCollection;

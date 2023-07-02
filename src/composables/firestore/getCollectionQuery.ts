//* clean version - no async
import { ref, watchEffect } from "vue";
import { getFirestore } from "firebase/firestore"
import {
    collection,
    onSnapshot,
    query,
    orderBy,
    where,
} from "firebase/firestore";

const db = getFirestore()
const getCollectionQuery = (col, xquery) => {
  const documents = ref(null);

  const colRef = query(collection(db, col), where(...xquery));
  //orderBy("createdAt", "desc"),

  console.log(colRef);

  const unsub = onSnapshot(colRef, (snapshot) => {
    let queryResults = [];
    snapshot.docs.forEach((doc) => {
      queryResults.push({ ...doc.data(), id: doc.id });
    });

    documents.value = queryResults;
  });

  watchEffect((onInvalidate) => {
    onInvalidate(() => unsub());
  });

  return { documents };
};

export default getCollectionQuery;
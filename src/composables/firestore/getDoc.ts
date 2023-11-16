import { getFirestore } from "firebase/firestore"
import { doc, getDoc } from "firebase/firestore";
import { ref } from "vue";
//! Get a Document
const documents = ref();
const readDoc = async (col: string, id: string) => {
  const db = getFirestore()
  const docRef = doc(db, col, id);
  const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      console.log("id:", docSnap.id);
      // console.log("ref:", docSnap.ref);
      // console.log("Document data:", docSnap.data());
      documents.value = docSnap.data()
    } else {
      console.log(`No document with id: ${id}`);
    }
  return { documents }
}

export default readDoc 

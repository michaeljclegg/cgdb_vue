// this is not working test version here not implamented
// CAN BE DELETED - connected to test_col.vue
import { getFirestore } from "firebase/firestore"
import {
  collection,
  onSnapshot,
  query,
  orderBy,
  limit,
  where,
  doc,
  getDocs,
  updateDoc
} from "firebase/firestore";

const db = getFirestore()



const collectionRef = collection(db, 'geners');

// Function to update the field type from text to Boolean
export async function updateField() {
  const querySnapshot = await getDocs(collectionRef);

  querySnapshot.forEach((doc) => {
    const textValue = doc.data().dummy;
    const booleanValue = (textValue === 'true'); // Modify this conversion logic as per your requirement

    const docRef = collectionRef.doc(doc.id);
    updateDoc(docRef, { dummy: booleanValue });
  });

  console.log('Field update complete.');
}
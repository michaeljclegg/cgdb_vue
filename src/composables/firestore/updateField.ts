// this is not working test version here not implamented
// CAN BE DELETED
import { getFirestore } from "firebase/firestore"
import { doc, updateDoc } from "firebase/firestore";
const db = getFirestore()

const docRef = doc(db, "cities", "DC");

// Set the "capital" field of the city 'DC'
await updateDoc(docRef, {
  capital: true,
});


/* 
// Get the current value of the field
docRef.get().then((doc) => {
  if (doc.exists) {
    const currentValue = doc.data().field1;

    // Calculate the new value based on the current value
    const newValue = currentValue * 2;

    // Update the field with the new value
    docRef.update({
      field2: newValue,
    })
    .then(() => {
      console.log("Field updated successfully!");
    })
    .catch((error) => {
      console.error("Error updating field: ", error);
    });
  } else {
    console.log("Document does not exist");
  }
})
.catch((error) => {
  console.error("Error getting document: ", error);
});
 */
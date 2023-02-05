
import { getFirestore } from "firebase/firestore"
import {
    collection
} from "firebase/firestore";


const changeLowerCase = () => {
    const db = getFirestore()
    // let collectionReference = collection(db, "geners");
    let collectionReference = collection(db, "geners");


    // ! name is the field name....
    // Get all the documents in the collection
    collectionReference.get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                let data = doc.data();
                let lowerCaseField = data.name.toLowerCase();

                // Update the document with the modified field
                doc.ref.update({ name: lowerCaseField })
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
}
export default changeLowerCase;
// TODO: Add SDKs for Firebase products that you want
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDS9obOhdhlBvn_0XRyXc5YGIIxpbgjS8I",
  authDomain: "cleggandguttmann-b27b3.firebaseapp.com",
  projectId: "cleggandguttmann-b27b3",
  storageBucket: "cleggandguttmann-b27b3.appspot.com",
  messagingSenderId: "877556731511",
  appId: "1:877556731511:web:6754f695a4846eac2f8072",
};

//! Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the services
const db = getFirestore(app);
const pAuth = getAuth(app);
const pStorage = getStorage(app);

//*(all works...)
console.log(db);
console.log(pAuth);
console.log(pStorage);

//! check Auth for user
onAuthStateChanged(pAuth, (user) => {
  if (user !== null) {
    console.log(user, "logged in!");
  } else {
    console.log(user, "No user");
  }
});

export default { db, pAuth, pStorage };

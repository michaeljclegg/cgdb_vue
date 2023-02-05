// TODO: Add SDKs for Firebase products that you want
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChwQ2UgCVbj-KVpbUf24rqvDStGaYkKJI",
  authDomain: "cleggandguttmann-12fc9.firebaseapp.com",
  projectId: "cleggandguttmann-12fc9",
  storageBucket: "cleggandguttmann-12fc9.appspot.com",
  messagingSenderId: "253341068113",
  appId: "1:253341068113:web:55fdf8694917ba95790170",
};

//! Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the services
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

// check if FB services work
console.log("firestore: ", db);
console.log("auth service: ", auth);
console.log("storage service: ", storage);

// //! check Auth status
onAuthStateChanged(auth, (user) => {
  if (user !== null) {
    console.log(user.uid, "LOGGED In!");
  } else {
    console.log("NO USER", user);
  }
});


export default { db, storage };

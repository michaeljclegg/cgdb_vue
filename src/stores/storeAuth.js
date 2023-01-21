import { defineStore, acceptHMRUpdate } from "pinia";
import { ref } from "vue";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const auth = getAuth();

export const useStoreAuth = defineStore("storeAuth", () => {
  //! STATE
  const userID = ref("");

  //register user
  const registerUser = (credentials) => {
    console.log(credentials.email);
    createUserWithEmailAndPassword(
      auth,
      credentials.email,
      credentials.password
    )
      .then((userCredential) => {
        const user = userCredential.user;
        userID.value = user.uid;
        console.log("userID.value: ", userID.value);
        console.log(user, "Signed in");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("errorMessage: ", errorMessage, "error code: ", errorCode);
      });
  };
  //login
  const loginUser = (credentials) => {
    console.log(credentials.email);
    signInWithEmailAndPassword(auth, credentials.email, credentials.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user, "Signed in");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("errorMessage: ", errorMessage, "error code: ", errorCode);
      });
  };
  //logout user
  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return { registerUser, loginUser, logoutUser };
});
export default { useStoreAuth };

// hot reload problem patch
if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useStoreAuth, import.meta.hot));

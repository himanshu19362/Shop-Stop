import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAM0lekIF-Rj0ougCuWzpJfX2dcTI-2SBs",
  authDomain: "shop-stop-d081d.firebaseapp.com",
  projectId: "shop-stop-d081d",
  storageBucket: "shop-stop-d081d.appspot.com",
  messagingSenderId: "94612048760",
  appId: "1:94612048760:web:49db7d69bcef54ac91968d",
  measurementId: "G-WLPWQXM9E1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebaseApp.auth();
const db = firebaseApp.firestore();

export { auth , db }

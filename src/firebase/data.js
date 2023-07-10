// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhqprvnA27BJyCwxX-EBiiY397zTtPyLI",
  authDomain: "salomon-shop.firebaseapp.com",
  projectId: "salomon-shop",
  storageBucket: "salomon-shop.appspot.com",   
  messagingSenderId: "647252970650",
  appId: "1:647252970650:web:67cddb62b9073d595aa323"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
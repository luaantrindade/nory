// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9ayTdWrvXD4Kojv08_o_7GSkRKGxr4dY",
  authDomain: "nory-challenge.firebaseapp.com",
  projectId: "nory-challenge",
  storageBucket: "nory-challenge.firebasestorage.app",
  messagingSenderId: "550591308588",
  appId: "1:550591308588:web:a72d41756e189eb3fa4289",
  measurementId: "G-G42VNGB79T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Storage
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
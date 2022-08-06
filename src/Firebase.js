// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8zAFz7iYChopRvnAQE0oN_0ZSF9YEF4k",
  authDomain: "bg-removal-dca20.firebaseapp.com",
  projectId: "bg-removal-dca20",
  storageBucket: "gs://bg-removal-dca20.appspot.com",
  messagingSenderId: "934693394006",
  appId: "1:934693394006:web:86c44f6eb851811db18df7",
  databaseURL:
    "https://bg-removal-dca20-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the database service and export the reference for other modules
export const database = getDatabase(app);
export const storage = getStorage(app);
export const auth = getAuth(app);

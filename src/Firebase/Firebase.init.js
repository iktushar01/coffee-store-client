// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4jhCRQ9jjZTKabrqVF-CZaNDdYqDgRRc",
  authDomain: "coffee-store-app-ec11e.firebaseapp.com",
  projectId: "coffee-store-app-ec11e",
  storageBucket: "coffee-store-app-ec11e.firebasestorage.app",
  messagingSenderId: "767337083559",
  appId: "1:767337083559:web:a04ef0e03452d5d4c32182"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
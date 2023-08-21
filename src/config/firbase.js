// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBytYql14hUTVGIefe3KLUFIFO0F6DGv0Q",
  authDomain: "contact-6eaa1.firebaseapp.com",
  projectId: "contact-6eaa1",
  storageBucket: "contact-6eaa1.appspot.com",
  messagingSenderId: "820791884888",
  appId: "1:820791884888:web:a6662846703e08badd1e2d",
  measurementId: "G-VR7JMNQ5P4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

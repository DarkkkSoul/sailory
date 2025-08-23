// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMBHqIyZHq9MhT6wLR2yEG506dWvxh2LU",
  authDomain: "travel-55292.firebaseapp.com",
  projectId: "travel-55292",
  storageBucket: "travel-55292.firebasestorage.app",
  messagingSenderId: "1097186398250",
  appId: "1:1097186398250:web:80971531dce9608d79b353"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

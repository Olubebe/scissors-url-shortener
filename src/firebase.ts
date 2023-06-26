// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, connectAuthEmulator} from 'firebase/auth';
import {getFirestore, connectFirestoreEmulator, serverTimestamp, collection, addDoc, doc, getDocs, deleteDoc, getDoc, query, where, updateDoc, increment, setDoc, Timestamp} from 'firebase/firestore';
import {getFunctions, httpsCallable} from 'firebase/functions';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAZB8dxknGP07e6QSxPWBNqfJwrMgeUhc",
  authDomain: "url-scissors-d8b7f.firebaseapp.com",
  projectId: "url-scissors-d8b7f",
  storageBucket: "url-scissors-d8b7f.appspot.com",
  messagingSenderId: "558747413222",
  appId: "1:558747413222:web:45f24b79233e5ec5702927"
};





// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);  
const functions = getFunctions(app);

if (process.env.NODE_ENV === 'development') {
connectAuthEmulator(auth, "http://127.0.0.1:9099");
connectFirestoreEmulator(db, '127.0.0.1', 8080);
}



export {db, auth, app, serverTimestamp, collection, addDoc, doc, getDocs, deleteDoc, query, getDoc, where, updateDoc, setDoc, increment, functions, httpsCallable};

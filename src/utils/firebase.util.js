// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,signInWithPopup,GoogleAuthProvider} from "firebase/auth"
import {getFirestore,doc,setDoc,getDoc} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBXPllqHq16LbXaJwTlJaXeuqxVZjAfn94",
  authDomain: "cloth-db-c9481.firebaseapp.com",
  projectId: "cloth-db-c9481",
  storageBucket: "cloth-db-c9481.appspot.com",
  messagingSenderId: "625173010848",
  appId: "1:625173010848:web:220d70f8aa826772aa6cc5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();


provider.setCustomParameters({
    prompt:"select_account"
})

export const signInWithGooglePopup = () => signInWithPopup(auth,provider);
export const db = getFirestore();
export const docRef = doc; 
export const getDocument = getDoc;
export const setDocument = setDoc;
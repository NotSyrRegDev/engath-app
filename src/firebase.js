// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, doc, setDoc  , getDocs , getFirestore , where , query , deleteDoc  , updateDoc , increment  , getDoc } from "firebase/firestore";
import { signInWithEmailAndPassword , getAuth , signOut , createUserWithEmailAndPassword
 } from 'firebase/auth';



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIA4QghTTc8L_qCA9qerRM6onVn3rRHtg",
  authDomain: "engath-app.firebaseapp.com",
  projectId: "engath-app",
  storageBucket: "engath-app.appspot.com",
  messagingSenderId: "936764796838",
  appId: "1:936764796838:web:c13b374e0f3f01c0046967",
  measurementId: "G-D1SLNFKHSZ"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();
const auth = getAuth();


export { db , setDoc , doc , where , query , collection , getDocs   , deleteDoc , updateDoc , increment , getDoc , signInWithEmailAndPassword , createUserWithEmailAndPassword , auth , signOut } ;
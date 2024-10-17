import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"; 
import { GoogleAuthProvider,getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB102wcQ-HgXc-EW0-KB8EKhP7EjsUnC6A",
  authDomain: "mailwave-3973c.firebaseapp.com",
  projectId: "mailwave-3973c",
  storageBucket: "mailwave-3973c.appspot.com",
  messagingSenderId: "220140048999",
  appId: "1:220140048999:web:26625b09fdc3c45921fac2",
  measurementId: "G-EHJK5TVMQN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
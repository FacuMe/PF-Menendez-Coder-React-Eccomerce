import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAtLLa0zDcRE2mWPtB0YrakwrxHC6nbtY0",
  authDomain: "ecommerce-react-coder-9c6ae.firebaseapp.com",
  projectId: "ecommerce-react-coder-9c6ae",
  storageBucket: "ecommerce-react-coder-9c6ae.appspot.com",
  messagingSenderId: "313228407698",
  appId: "1:313228407698:web:62d1f72e76a2b0e5af074b"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();

export default db;
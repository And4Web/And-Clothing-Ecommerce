import firebase from "firebase/compat/app";
// import { initializeApp } from "firebase/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAJ7fGatcn_0YMwmiaudzUMScf_eorQU20",
  authDomain: "andcommercedb.firebaseapp.com",
  projectId: "andcommercedb",
  storageBucket: "andcommercedb.appspot.com",
  messagingSenderId: "450766483389",
  appId: "1:450766483389:web:6a43d674059fcffea82cd4",
  measurementId: "G-P09M234ZKX",
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

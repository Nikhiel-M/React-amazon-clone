import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDtQK8oOn3kjNXk0SJfQ6JN8fDsIjRTEss",
  authDomain: "zaio-clone-7e062.firebaseapp.com",
  projectId: "zaio-clone-7e062",
  storageBucket: "zaio-clone-7e062.firebasestorage.app",
  messagingSenderId: "223735160646",
  appId: "1:223735160646:web:a65038adaa4b5195dfcf47",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

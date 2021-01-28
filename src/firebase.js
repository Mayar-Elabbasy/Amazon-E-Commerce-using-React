import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBaCtAAx1lZWRW26DPhRSBlNBHu6swO1uE",
    authDomain: "e-commerce-project-224e3.firebaseapp.com",
    projectId: "e-commerce-project-224e3",
    storageBucket: "e-commerce-project-224e3.appspot.com",
    messagingSenderId: "705711673609",
    appId: "1:705711673609:web:2a11bc118041b477b683d8",
    measurementId: "G-LM1VMTGXWK"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
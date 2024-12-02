import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAD9t2UISsjxEqbPllPyYeWrR8hjsdSuYw",
    authDomain: "mystore-5a660.firebaseapp.com",
    projectId: "mystore-5a660",
    storageBucket: "mystore-5a660.firebasestorage.app",
    messagingSenderId: "506331947423",
    appId: "1:506331947423:web:ef203ce11bc3cc2bd45daa",
    measurementId: "G-TV8N92REZL"
  };

firebase.initiakizeApp(firebaseConfig)

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export{auth, db, storage}
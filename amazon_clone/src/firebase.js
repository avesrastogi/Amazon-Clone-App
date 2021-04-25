import firebase from 'firebase'

const firebaseConfig = firebase.initializeApp ({
    apiKey: "AIzaSyC6-bJ-kZr0tCZrKTH0izVp-KT74kVR4M8",
    authDomain: "clone-ce345.firebaseapp.com",
    projectId: "clone-ce345",
    storageBucket: "clone-ce345.appspot.com",
    messagingSenderId: "322499932996",
    appId: "1:322499932996:web:a7c2c3be0bbf610f9add11",
    measurementId: "G-NKLH77T9B1"
  });

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider };

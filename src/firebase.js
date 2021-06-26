// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAnxisUJer9Hsw-xJR0DX1mLYV1o9PG47U",
    authDomain: "tiktok-clone-e07cd.firebaseapp.com",
    projectId: "tiktok-clone-e07cd",
    storageBucket: "tiktok-clone-e07cd.appspot.com",
    messagingSenderId: "24682320389",
    appId: "1:24682320389:web:0dc19ac1a36adef1d3426c",
    measurementId: "G-4XTMV9DLMX"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
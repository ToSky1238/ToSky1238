import firebase from "firebase";

// Your web app's Firebase configuration
// Initialize Firebase
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB_1XH4hgaNe4HaCDifZi8_a1BFruqkpS4",
  authDomain: "test-contact-form-01.firebaseapp.com",
  projectId: "test-contact-form-01",
  storageBucket: "test-contact-form-01.appspot.com",
  messagingSenderId: "467994192173",
  appId: "1:467994192173:web:503b854a35d262cb9d8ba4",
  measurementId: "G-4N7L5FFXCY",
});

const db = firebaseApp.firestore();

export default db;

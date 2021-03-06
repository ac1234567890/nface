import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA77EbYKDj2eYFipONS0c3ApFTHXqHGYi4",
    authDomain: "nface-a41cf.firebaseapp.com",
    projectId: "nface-a41cf",
    storageBucket: "nface-a41cf.appspot.com",
    messagingSenderId: "425556048793",
    appId: "1:425556048793:web:a453483e4e60aa82e9b108",
    measurementId: "G-7WEW3PMGQ9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

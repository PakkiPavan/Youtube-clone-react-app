import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAlUl5KsNSxBMUmd9v05PEMjwO2X6BjzpM",
    authDomain: "clone-1-308906.firebaseapp.com",
    projectId: "youtube-clone-1-308906",
    storageBucket: "youtube-clone-1-308906.appspot.com",
    messagingSenderId: "839608329453",
    appId: "1:839608329453:web:f47d7588ddd6cbf12a98e4"
};
firebase.initializeApp(firebaseConfig);

export default firebase.auth();

// Firebase unique identifier - cloned-utube
// Project public-facing name - project-330976252454
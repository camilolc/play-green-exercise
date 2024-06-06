// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

import {getFirestore} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnprUk1szyp4rxB31HmgSBJE3-_5hZSv4",
  authDomain: "play-green-c8721.firebaseapp.com",
  projectId: "play-green-c8721",
  storageBucket: "play-green-c8721.appspot.com",
  messagingSenderId: "710934796646",
  appId: "1:710934796646:web:b21418567b956e534b90a7"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDB = getFirestore(FirebaseApp);
import { initializeApp } from "firebase/app";
import {config} from '../../secret.js' 

import { 
    getAuth,
     signInWithPopup,
     signInWithRedirect,
     GoogleAuthProvider
     } from "firebase/auth";
// Interact with firestore/databas
import {getFirestore, doc, setDoc, getDoc} from 'firebase/firestore'

const firebaseConfig = {
    // apiKey: "AIzaSyDAhV54rR97_4pSLLM2CZJ_fW6Pbwd0QE8",
    apiKey: config.REACT_APP_FIREBASE_API_KEY,
    authDomain: config.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: config.REACT_APP_FIREBASE_DATA_BASE_URL,
    projectId: config.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: config.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: config.REACT_APP_FIREBASE_MESSAGING_SEDER_ID,
    appId: config.REACT_APP_FIREBASE_APP_ID,
    measurementId: config.REACT_APP_FIREBASE_MEASUREMENT_ID
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider()
  provider.setCustomParameters({
    prompt: 'select_account'
  })
 const auth = getAuth();
 const  signInWithGooglePopup = () => signInWithPopup(auth,provider)

 // interact with firestore



 export{
    auth,
    signInWithGooglePopup
 }
//   const analytics = getAnalytics(app);

// const auth = getAuth();
// auth.languageCode = 'it';
// To apply the default browser preference instead of explicitly setting it.
// firebase.auth().useDeviceLanguage();

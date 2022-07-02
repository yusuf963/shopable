import { initializeApp } from "firebase/app";
import { 
    getAuth,
     signInWithPopup,
     GoogleAuthProvider
     } from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATA_BASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SEDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
  };
  // console.log(firebaseConfig.apiKey,firebaseConfig.authDomain, firebaseConfig.databaseURL,firebaseConfig.projectId,
  //   firebaseConfig.storageBucket,firebaseConfig.messagingSenderId, firebaseConfig.appId,firebaseConfig.measurementId
  //   )
  
  // Initialize Firebase
  initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider()
  provider.setCustomParameters({
    prompt: 'select_account'
  })
 const auth = getAuth();
 const  signInWithGooglePopup = () => signInWithPopup(auth,provider)

 export{
    auth,
    signInWithGooglePopup
 }
//   const analytics = getAnalytics(app);

// const auth = getAuth();
// auth.languageCode = 'it';
// To apply the default browser preference instead of explicitly setting it.
// firebase.auth().useDeviceLanguage();

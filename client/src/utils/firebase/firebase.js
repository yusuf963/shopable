import { initializeApp } from "firebase/app";
import { 
    getAuth,
     signInWithPopup,
     signInWithRedirect,
     GoogleAuthProvider
     } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDAhV54rR97_4pSLLM2CZJ_fW6Pbwd0QE8",
    authDomain: "crown-db-2350a.firebaseapp.com",
    databaseURL: "https://crown-db-2350a.firebaseio.com",
    projectId: "crown-db-2350a",
    storageBucket: "crown-db-2350a.appspot.com",
    messagingSenderId: "590834834404",
    appId: "1:590834834404:web:934ac2b3c1c47448c805f1",
    measurementId: "G-3D52BRPF1X"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
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

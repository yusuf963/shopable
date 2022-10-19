import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut

} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// console.log(process.env.REACT_APP_FIREBASE_API_KEY,
//   process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   process.env.REACT_APP_FIREBASE_DATA_BASE_URL,
//   process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   process.env.REACT_APP_FIREBASE_MESSAGING_SEDER_ID,
//   process.env.REACT_APP_FIREBASE_APP_ID,
//   process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
// )
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // databaseURL: process.env.REACT_APP_FIREBASE_DATA_BASE_URL,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SEDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID,
  // measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
  apiKey: "AIzaSyDAhV54rR97_4pSLLM2CZJ_fW6Pbwd0QE8",
  authDomain: "crown-db-2350a.firebaseapp.com",
  databaseURL: "https://crown-db-2350a.firebaseio.com",
  projectId: "crown-db-2350a",
  storageBucket: "crown-db-2350a.appspot.com",
  messagingSenderId: "590834834404",
  appId: "1:590834834404:web:934ac2b3c1c47448c805f1",
  measurementId: "G-3D52BRPF1X",
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  // creating user and adding user to DB 
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
}
export const signOutUser = async () => await signOut(auth);
//   const analytics = getAnalytics(app);

// const auth = getAuth();
// auth.languageCode = 'it';
// To apply the default browser preference instead of explicitly setting it.
// firebase.auth().useDeviceLanguage();

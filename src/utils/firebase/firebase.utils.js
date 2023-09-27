import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD0EvxxLAo2ksdcmex90_eSWvvlHyRvpJc",
  authDomain: "comfy-nest-clothing.firebaseapp.com",
  projectId: "comfy-nest-clothing",
  storageBucket: "comfy-nest-clothing.appspot.com",
  messagingSenderId: "1024219537797",
  appId: "1:1024219537797:web:26ee3bc5cba1c4f013e4ec",
};

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth();

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: `select_account`,
});

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, passedName) => {
  if (!userAuth) return; //a way to protect our code
  const userDocRef = doc(db, `users`, userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const name = displayName ? displayName : passedName;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        name,
        email,
        createdAt,
      });
    } catch (error) {
      console.log(`there was an error`);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  const response = await createUserWithEmailAndPassword(auth, email, password);
  return response.user;
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  const response = await signInWithEmailAndPassword(auth, email, password);
  return response;
};

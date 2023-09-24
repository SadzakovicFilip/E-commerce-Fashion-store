import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
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

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: `select_account`,
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  console.log(userAuth.uid);
  const userDocRef = doc(db, `users`, userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log(`there was an error`);
    }
  }
  return userDocRef;
};

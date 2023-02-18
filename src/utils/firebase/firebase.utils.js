/* eslint-disable max-len */
/* eslint-disable consistent-return */
/* eslint-disable no-return-await */
/* eslint-disable no-unused-vars */
import { initializeApp } from 'firebase/app';
import {
  getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged,
} from 'firebase/auth';
import {
  getFirestore, doc, getDoc, setDoc,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDY5E5HPRDOjHYoKVmilpoJUIOfdnIOTmw',
  authDomain: 'crwn-clothing-db-82515.firebaseapp.com',
  projectId: 'crwn-clothing-db-82515',
  storageBucket: 'crwn-clothing-db-82515.appspot.com',
  messagingSenderId: '973692771512',
  appId: '1:973692771512:web:226a060b5519aefe03e84d',
};

const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const GoogleProvider = new GoogleAuthProvider();
GoogleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const signInWithGooglePopup = () => signInWithPopup(auth, GoogleProvider);

export const db = getFirestore(firebaseApp);
export const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userDoc = await getDoc(userDocRef);
  if (!userDoc.exists()) {
    const { displayName, email } = userAuth;
    const createdDate = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdDate,
        ...additionalInfo,
      });
    } catch (error) {
      console.log('creating user error', error.message);
    }
  }
  return userDoc;
};
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};
export const signOutUser = async () => await signOut(auth);
export const onAuthStateChangeListiner = (callback) => onAuthStateChanged(auth, callback);

import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
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

// const app = firebase.initializeApp(config);
// const authh = firebase.auth.getAuth()
const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
const GoogleProvider = new GoogleAuthProvider();
GoogleProvider.setCustomParameters({
  prompt: 'select_account',
});
export const signInWithGoogle = () => signInWithPopup(auth, GoogleProvider);

export const db = getFirestore(firebaseApp);

export const createUserFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { dispalyName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, { dispalyName, email, createdAt });
    } catch (error) {
      console.log('creating user error', error.message);
    }
  }
  return userDocRef;
};

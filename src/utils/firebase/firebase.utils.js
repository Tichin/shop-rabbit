// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBRO0jvD2pJiF71DCYS4KJd5Ij5fV6XsLU',
  authDomain: 'shop-rabbits.firebaseapp.com',
  projectId: 'shop-rabbits',
  storageBucket: 'shop-rabbits.appspot.com',
  messagingSenderId: '341656906397',
  appId: '1:341656906397:web:6c2cb81d735865f57fc274',
  measurementId: 'G-74J4N21KV2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

provider.setCustomParameters({
  prompt: 'select_account',
});

export const signIn = () => signInWithPopup(auth, provider);

export const createUserAuthDoc = async (user) => {
  const userRef = doc(db, 'users', user.uid);
  const userSnap = await getDoc(userRef);
  const { displayName, email } = user;

  if (!userSnap.exists()) {
    const createdAt = new Date();
    try {
      await setDoc(userRef, { displayName, email, createdAt });
    } catch (err) {
      console.log(err.message);
    }
  }
};

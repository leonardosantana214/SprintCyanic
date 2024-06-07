import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyACTaJh4OCXnfwWNANZIFdjfAtHXcvGBNk",
  authDomain: "cyanic-20732.firebaseapp.com",
  projectId: "cyanic-20732",
  storageBucket: "cyanic-20732.appspot.com",
  messagingSenderId: "652674540628",
  appId: "1:652674540628:android:d0622d7d47b42d103ef9c1",
  measurementId: "G-XXXXXXX"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBS-t-SL6ZY1t_bYy0qgwVtWxbtfcx4tqs",
  authDomain: "smart-fit-sprint.firebaseapp.com",
  projectId: "smart-fit-sprint",
  storageBucket: "smart-fit-sprint.appspot.com",
  messagingSenderId: "1082499419239",
  appId: "1:1082499419239:web:ee24d26eeefc9e11d098c2",
  measurementId: "G-84Z8WGL43J",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };

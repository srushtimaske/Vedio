import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyANhVQ4eO_15b4wrY1Gm7mEBEsJ18zHgMI",
  authDomain: "zoom-clone-93bd6.firebaseapp.com",
  projectId: "zoom-clone-93bd6",
  storageBucket: "zoom-clone-93bd6.appspot.com",
  messagingSenderId: "1008060609609",
  appId: "1:1008060609609:web:22449e81229c184d887b98",
  measurementId: "G-Y6T49NMRFL"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const meetingsRef = collection(firebaseDB, "meetings");






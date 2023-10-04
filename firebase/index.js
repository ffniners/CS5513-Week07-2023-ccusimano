import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABm-Q7yGZkHzFN1YgY73TfjA2Xfsn4i3g",
  authDomain: "c55a8-a42bc.firebaseapp.com",
  projectId: "c55a8-a42bc",
  storageBucket: "c55a8-a42bc.appspot.com",
  messagingSenderId: "427420522465",
  appId: "1:427420522465:web:7caae05cb96217454824a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };



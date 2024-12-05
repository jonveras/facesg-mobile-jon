import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCT9pyQ2a9YNUjj6Mpb1sdpLxgSHVaBjqI",
  authDomain: "miniblog-5a385.firebaseapp.com",
  projectId: "miniblog-5a385",
  storageBucket: "miniblog-5a385.firebasestorage.app",
  messagingSenderId: "533299525934",
  appId: "1:533299525934:web:69802f30bd8df45132a2bf"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };

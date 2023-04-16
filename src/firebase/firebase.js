import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBum0pd5PuoFH0zt3sqUl-tOrjoK7gpvcc",
  authDomain: "filmyverse-2357c.firebaseapp.com",
  projectId: "filmyverse-2357c",
  storageBucket: "filmyverse-2357c.appspot.com",
  messagingSenderId: "698536925372",
  appId: "1:698536925372:web:220a476ff3cc32580f18b9",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");

export default app;

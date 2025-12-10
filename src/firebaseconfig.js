import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBkhKYVJzA83LuaHbgqXJsXfzQP8xdQqEg",
  authDomain: "react-firebase-c6543.firebaseapp.com",
  projectId: "react-firebase-c6543",
  storageBucket: "react-firebase-c6543.firebasestorage.app",
  messagingSenderId: "912839172790",
  appId: "1:912839172790:web:3acbf4fe13cf0f71b67c17"
};

 export const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);
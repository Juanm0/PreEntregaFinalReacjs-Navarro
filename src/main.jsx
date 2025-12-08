import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkhKYVJzA83LuaHbgqXJsXfzQP8xdQqEg",
  authDomain: "react-firebase-c6543.firebaseapp.com",
  projectId: "react-firebase-c6543",
  storageBucket: "react-firebase-c6543.firebasestorage.app",
  messagingSenderId: "912839172790",
  appId: "1:912839172790:web:3acbf4fe13cf0f71b67c17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

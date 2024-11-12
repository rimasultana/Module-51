// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdHCg_Suvo8VOzuA2FilmdC0qybG01R4o",
  authDomain: "module-51-e59a2.firebaseapp.com",
  projectId: "module-51-e59a2",
  storageBucket: "module-51-e59a2.firebasestorage.app",
  messagingSenderId: "779637488538",
  appId: "1:779637488538:web:8589fbfd79483999885823"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
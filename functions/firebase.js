// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNsymlIenq5pGafgROklfTFpoq9VJr2p0",
  authDomain: "wanderlink-f6573.firebaseapp.com",
  projectId: "wanderlink-f6573",
  storageBucket: "wanderlink-f6573.appspot.com",
  messagingSenderId: "203258036663",
  appId: "1:203258036663:web:e987e08218b75e37586832",
  measurementId: "G-P7KGDKT89D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

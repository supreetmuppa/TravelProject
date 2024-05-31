// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import {
  getFirestore,
  collection,
  getDocs,
  setDoc,
  doc,
  getDoc,
  addDoc,
  query,
  where
} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCNsymlIenq5pGafgROklfTFpoq9VJr2p0',
  authDomain: 'wanderlink-f6573.firebaseapp.com',
  projectId: 'wanderlink-f6573',
  storageBucket: 'wanderlink-f6573.appspot.com',
  messagingSenderId: '203258036663',
  appId: '1:203258036663:web:e987e08218b75e37586832',
  measurementId: 'G-P7KGDKT89D'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db, collection, getDocs, setDoc, doc, getDoc, addDoc, query, where }

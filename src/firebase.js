import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';  // Новый импорт для Firestore

const firebaseConfig = {
  apiKey: "AIzaSyAL7ybuRinpFzN47Pnu7_RB3AnWyCtu-3Q",
  authDomain: "chemp-89f98.firebaseapp.com",
  projectId: "chemp-89f98",
  storageBucket: "chemp-89f98.appspot.com",
  messagingSenderId: "25509205668",
  appId: "1:25509205668:web:4fe72885eef7e63b753831",
  measurementId: "G-1LFW134EPN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider(); 

// Initialize Firestore
export const db = getFirestore(app);

export const checkAuthState = (setUser) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      setUser(null);
      localStorage.removeItem('user');
    }
  });
};

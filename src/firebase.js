// import { initializeApp } from 'firebase/app';
// import { getAuth, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore';  // Новый импорт для Firestore

// const firebaseConfig = {
//   apiKey: "AIzaSyAL7ybuRinpFzN47Pnu7_RB3AnWyCtu-3Q",
//   authDomain: "chemp-89f98.firebaseapp.com",
//   projectId: "chemp-89f98",
//   storageBucket: "chemp-89f98.appspot.com",
//   messagingSenderId: "25509205668",
//   appId: "1:25509205668:web:4fe72885eef7e63b753831",
//   measurementId: "G-1LFW134EPN"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize Firebase Authentication and get a reference to the service
// export const auth = getAuth(app);
// export const googleProvider = new GoogleAuthProvider(); 

// // Initialize Firestore
// export const db = getFirestore(app);

// export const checkAuthState = (setUser) => {
//   onAuthStateChanged(auth, (user) => {
//     if (user) {
//       setUser(user);
//       localStorage.setItem('user', JSON.stringify(user));
//     } else {
//       setUser(null);
//       localStorage.removeItem('user');
//     }
//   });
// };










import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';  // Новый импорт для Firestore

const firebaseConfig = {
  apiKey: "AIzaSyAL7ybuRinpFzN47Pnu7_RB3AnWyCtu-3Q",
  authDomain: "chemp-89f98.firebaseapp.com",
  projectId: "chemp-89f98",
  storageBucket: "chemp-89f98",
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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = doc(db, `users/${userAuth.uid}`);
  const snapShot = await getDoc(userRef);

  if (!snapShot.exists) {
    const { email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userRef, {
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('Error creating user', error.message);
    }
  }

  return userRef;
};

export const updateUserProfileDocument = async (userAuth, updatedData) => {
  if (!userAuth) return;

  const userRef = doc(db, `users/${userAuth.uid}`);
  try {
    await updateDoc(userRef, updatedData);
  } catch (error) {
    console.log('Error updating user', error.message);
  }

  return userRef;
};

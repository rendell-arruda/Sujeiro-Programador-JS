import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAyiWhkgTMvgRG9knNVzckfaKlYrUxlTk8',
  authDomain: 'cursosujprog.firebaseapp.com',
  projectId: 'cursosujprog',
  storageBucket: 'cursosujprog.appspot.com',
  messagingSenderId: '944255262296',
  appId: '1:944255262296:web:fe20319666f47186cb342d',
  measurementId: 'G-ZRQDG1FXSS'
};

// inicializaçao do firebase
const firebaseApp = initializeApp(firebaseConfig);

// inicializaçao do banco
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };

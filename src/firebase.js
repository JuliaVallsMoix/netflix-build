import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyAkHB4jzc4NQLBqY4KWKEUI8GsK98RJuI8',
    authDomain: 'netflix-clone-891dc.firebaseapp.com',
    projectId: 'netflix-clone-891dc',
    storageBucket: 'netflix-clone-891dc.appspot.com',
    messagingSenderId: '506479862282',
    appId: '1:506479862282:web:1bf1d0fafe7c42549935f3',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth };
export default db;
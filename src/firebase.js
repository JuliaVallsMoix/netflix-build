
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAkHB4jzc4NQLBqY4KWKEUI8GsK98RJuI8",
  authDomain: "netflix-clone-891dc.firebaseapp.com",
  projectId: "netflix-clone-891dc",
  storageBucket: "netflix-clone-891dc.appspot.com",
  messagingSenderId: "506479862282",
  appId: "1:506479862282:web:1bf1d0fafe7c42549935f3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
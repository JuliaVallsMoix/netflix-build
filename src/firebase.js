// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkHB4jzc4NQLBqY4KWKEUI8GsK98RJuI8",
  authDomain: "netflix-clone-891dc.firebaseapp.com",
  projectId: "netflix-clone-891dc",
  storageBucket: "netflix-clone-891dc.appspot.com",
  messagingSenderId: "506479862282",
  appId: "1:506479862282:web:1bf1d0fafe7c42549935f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}
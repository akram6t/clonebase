import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDoc, getCount, getDocs, setDoc, addDoc } from 'firebase/firestore/lite';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyB7wKJSlWgdSeBq0k9GAUzCayHMO7fks_4",
    authDomain: "arbaz-khan-6a4cb.firebaseapp.com",
    databaseURL: "https://arbaz-khan-6a4cb-default-rtdb.firebaseio.com",
    projectId: "arbaz-khan-6a4cb",
    // storageBucket: "arbaz-khan-6a4cb.appspot.com",
    // messagingSenderId: "359241357196",
    appId: "1:359241357196:web:55407c13c0b7980f8e28a9",
    // measurementId: "G-QBKM186CNV"
  };

const FApp = initializeApp(firebaseConfig);

const firestore = getFirestore(FApp); 

export default FApp;
export { firestore, collection, getDoc, getCount, getDocs, setDoc, addDoc };
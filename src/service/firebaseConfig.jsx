// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD2-1VM9a7Y01CuPBtIcouCdA7xmgfdagc",
    authDomain: "gofusion-75037.firebaseapp.com",
    projectId: "gofusion-75037",
    storageBucket: "gofusion-75037.firebasestorage.app",
    messagingSenderId: "478710424672",
    appId: "1:478710424672:web:13766fa880a85243778f05",
    measurementId: "G-C7V49XYM3Q",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnXaQutIUrLUaXNBx9eToq7_8Ut09nBO4",
  authDomain: "frontendcapstone-bc174.firebaseapp.com",
  projectId: "frontendcapstone-bc174",
  storageBucket: "frontendcapstone-bc174.firebasestorage.app",
  messagingSenderId: "526379225704",
  appId: "1:526379225704:web:5d5fb921e3ace9c07ba1dd",
  measurementId: "G-WJMMHEHBZJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOgT0dFxWRzngDu_let0HYmbD6-R2W_Kk",
  authDomain: "netflixgpt-a4824.firebaseapp.com",
  projectId: "netflixgpt-a4824",
  storageBucket: "netflixgpt-a4824.appspot.com",
  messagingSenderId: "474353664902",
  appId: "1:474353664902:web:d3897466a9be408b7fa207",
  measurementId: "G-820G35TX6G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
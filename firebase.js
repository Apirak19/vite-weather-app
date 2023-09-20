// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUKxVqrHdt5MlPbiJPq60FMTL1HftMUUA",
  authDomain: "weather-app-253c5.firebaseapp.com",
  projectId: "weather-app-253c5",
  storageBucket: "weather-app-253c5.appspot.com",
  messagingSenderId: "916518127290",
  appId: "1:916518127290:web:ce52bf9d1094470387a483",
  measurementId: "G-CZNNSHFWW8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

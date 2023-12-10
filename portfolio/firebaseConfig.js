// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7R1baLWv1DnOVly-B7REFKbPikmGNrI4",
  authDomain: "my-portfolio-c46d2.firebaseapp.com",
  projectId: "my-portfolio-c46d2",
  storageBucket: "my-portfolio-c46d2.appspot.com",
  messagingSenderId: "779102054141",
  appId: "1:779102054141:web:0818da1dad4f6da3f9c094",
  measurementId: "G-10YG5YL0S7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3b0Jt-mq-6lrWYTb9Carx6xJ-jfkamYs",
  authDomain: "personal-portfolio-adf74.firebaseapp.com",
  projectId: "personal-portfolio-adf74",
  storageBucket: "personal-portfolio-adf74.appspot.com",
  messagingSenderId: "41230978697",
  appId: "1:41230978697:web:101ecb46520a792c2a8058"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
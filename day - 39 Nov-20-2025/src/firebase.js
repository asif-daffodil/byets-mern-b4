// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEI9VV2C1gQtQVl82PipaSXRIFR0C0MIk",
  authDomain: "byets-04.firebaseapp.com",
  projectId: "byets-04",
  storageBucket: "byets-04.firebasestorage.app",
  messagingSenderId: "731043375748",
  appId: "1:731043375748:web:4255ffd5158e32fb7d70d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
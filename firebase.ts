// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBy2Rbng6Pa-l6RoaNn9u2O_hHY_TFVK08",
  authDomain: "jarryd-dv300-classproject.firebaseapp.com",
  projectId: "jarryd-dv300-classproject",
  storageBucket: "jarryd-dv300-classproject.firebasestorage.app",
  messagingSenderId: "772485591272",
  appId: "1:772485591272:web:c791db03b5de14b89b595d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFdrCxs3YBlhxH1OmmB6SMRLSZlw7dmUM",
  authDomain: "my-blog-f36b0.firebaseapp.com",
  projectId: "my-blog-f36b0",
  storageBucket: "my-blog-f36b0.firebasestorage.app",
  messagingSenderId: "794101031088",
  appId: "1:794101031088:web:6209a5574307a3a92d9b75",
  measurementId: "G-MH430GBTH7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app)

export default { app };

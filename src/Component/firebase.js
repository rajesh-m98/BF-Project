import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCv9RllO5-gslLAtWp2oHRjiSylqDslpE0",
  authDomain: "otp1-97fab.firebaseapp.com",
  projectId: "otp1-97fab",
  storageBucket: "otp1-97fab.appspot.com",
  messagingSenderId: "833011065520",
  appId: "1:833011065520:web:0d7c8b2645caa4ea63d175",
  measurementId: "G-VTC4W427Q0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

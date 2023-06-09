
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'





// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvBssrcoaPSyM67jpSK2aHGkYteYR0b70",
  authDomain: "phone-auth-f3bcf.firebaseapp.com",
  projectId: "phone-auth-f3bcf",
  storageBucket: "phone-auth-f3bcf.appspot.com",
  messagingSenderId: "351471059557",
  appId: "1:351471059557:web:26d1d2d298f0c1b50dbc8c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;

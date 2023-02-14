
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmW88oY8u12Zmizxht2lVyvvFwXGcgG0c",
  authDomain: "engineering-hub-e7036.firebaseapp.com",
  projectId: "engineering-hub-e7036",
  storageBucket: "engineering-hub-e7036.appspot.com",
  messagingSenderId: "270165663464",
  appId: "1:270165663464:web:f7ee184504327ce6e4335d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider =  new GoogleAuthProvider();
export {auth,provider};

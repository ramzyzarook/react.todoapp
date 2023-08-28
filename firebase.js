// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-nZwAJfP69Ko5iDynwdGVwzIWtdXNllA",
  authDomain: "todo-list-25952.firebaseapp.com",
  projectId: "todo-list-25952",
  storageBucket: "todo-list-25952.appspot.com",
  messagingSenderId: "167342345521",
  appId: "1:167342345521:web:4e3d7b8d05694c7ea43410"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();



//why we using get database, auth firebase code here?
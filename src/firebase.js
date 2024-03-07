// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsIfq8Lnnb6zMiROYt4RllHfN-8bxiCk8",
  authDomain: "my-crud-app-7c2ef.firebaseapp.com",
  databaseURL: "https://my-crud-app-7c2ef-default-rtdb.firebaseio.com",
  projectId: "my-crud-app-7c2ef",
  storageBucket: "my-crud-app-7c2ef.appspot.com",
  messagingSenderId: "806533871773",
  appId: "1:806533871773:web:c23ffc097eb7cb5771bc74"
};



// Initialize Firebase
const Firebase = initializeApp(firebaseConfig);
export const database = getDatabase(Firebase);

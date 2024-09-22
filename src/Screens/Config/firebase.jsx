// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB8yMWW_CfgSNU8RxLeLdI9LlPZFAPAyY0",
    authDomain: "mini-hakatoon.firebaseapp.com",
    projectId: "mini-hakatoon",
    storageBucket: "mini-hakatoon.appspot.com",
    messagingSenderId: "361174918273",
    appId: "1:361174918273:web:6403ad72a50c8a85889980"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const database = getFirestore(app)

export {auth,database}

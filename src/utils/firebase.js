import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyD4xgxmKM6SiXPj2HryPRMEIGn004MON2U",
    authDomain: "coderhouse-react-app.firebaseapp.com",
    projectId: "coderhouse-react-app",
    storageBucket: "coderhouse-react-app.appspot.com",
    messagingSenderId: "965901922115",
    appId: "1:965901922115:web:f0782db8788502838d89f6"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
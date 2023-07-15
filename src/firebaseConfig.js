import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDXNc7xKeUQwcnl4HhC_pCxvsMHXY-rvvU",
	authDomain: "autonomicas-bfbce.firebaseapp.com",
	projectId: "autonomicas-bfbce",
	storageBucket: "autonomicas-bfbce.appspot.com",
	messagingSenderId: "1016457898065",
	appId: "1:1016457898065:web:7f6406534c3a533391f070"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export { auth, db }
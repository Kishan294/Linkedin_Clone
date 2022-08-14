import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBXzOZNRlMjzig8gdeLQrN51cdP8g1K9tk",
  authDomain: "linkedin-clone-fcbab.firebaseapp.com",
  projectId: "linkedin-clone-fcbab",
  storageBucket: "linkedin-clone-fcbab.appspot.com",
  messagingSenderId: "255290296991",
  appId: "1:255290296991:web:d5f6b8c2d05384df1e70aa",
};

const firebaseApp = getApps.length > 0 ? getApp : initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const database = getDatabase(firebaseApp);

export { storage, auth, provider, db, firebaseApp };
export default database;

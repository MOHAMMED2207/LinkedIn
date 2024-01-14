// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Required for side-effects
import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBACE_APIKEY,
  // authDomain: process.env.REACT_APP_FIREBACE_authDomain,
  // projectId: process.env.REACT_APP_FIREBACE_projectId,
  // storageBucket: process.env.REACT_APP_FIREBACE_storageBucket,
  // messagingSenderId: process.env.REACT_APP_FIREBACE_messagingSenderId,
  // appId: process.env.REACT_APP_FIREBACE_appId,
  // measurementId: process.env.REACT_APP_FIREBACE_measurementId,
  apiKey: "AIzaSyD5gUeq8X5IqZLFwDnoRupnHSZTWTRgXqY",
  authDomain: "linkedinclone-e2706.firebaseapp.com",
  projectId: "linkedinclone-e2706",
  storageBucket: "linkedinclone-e2706.appspot.com",
  messagingSenderId: "704046675382",
  appId: "1:704046675382:web:e151e9011a22dfa1c93d17",
  measurementId: "G-C28W601X88"
};

const App = initializeApp(firebaseConfig);
const Analytics = getAnalytics(App);
const Auth = getAuth(App);
const DB = getFirestore(App);
const Provider = new GoogleAuthProvider();
const storage = getStorage();
export { Auth, DB, Provider, Analytics, storage };


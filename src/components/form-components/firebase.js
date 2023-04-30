// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnxUMs2A8cEcysTcFhfpsssyouqxetNPA",
  authDomain: "smart-edukacja-images.firebaseapp.com",
  projectId: "smart-edukacja-images",
  storageBucket: "smart-edukacja-images.appspot.com",
  messagingSenderId: "58291976455",
  appId: "1:58291976455:web:1571e796f648db7e5d2da2",
  measurementId: "G-KH4KBS0G2M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
const analytics = getAnalytics(app);

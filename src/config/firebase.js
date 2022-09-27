import {initializeApp} from "firebase/app"
import {getAnalytics} from "firebase/analytics"


const firebaseConfig = {
    apiKey: "AIzaSyDSeQ0dN_sXo9vaTXo4PTWVIE_TPDiHoVQ",
    authDomain: "instagram-web-clone-c1f8b.firebaseapp.com",
    projectId: "instagram-web-clone-c1f8b",
    storageBucket: "instagram-web-clone-c1f8b.appspot.com",
    messagingSenderId: "751360519441",
    appId: "1:751360519441:web:71c0184691f9407cb8b0b0",
    measurementId: "G-M5WM47S836"
  };


const app = initializeApp(firebaseConfig);
getAnalytics(app);

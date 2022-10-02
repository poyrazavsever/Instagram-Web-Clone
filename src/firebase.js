import {
  initializeApp
} from "firebase/app"
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "firebase/auth"
import toast from "react-hot-toast";
import { userHandle } from "./utils";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, user => {
    userHandle(user || false)
})

export const login = async (email, password) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password)
    toast.success("Başarılı giriş yapıldı")
    console.log(response.user)
  } catch (err) {
    toast.error(err.code)
  }
}
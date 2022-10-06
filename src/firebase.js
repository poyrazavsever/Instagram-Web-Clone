import {
  initializeApp
} from "firebase/app"
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  updateProfile
} from "firebase/auth"
import toast from "react-hot-toast";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc
} from "firebase/firestore"
import {
  userHandle
} from "./utils";


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
const db = getFirestore(app);

onAuthStateChanged(auth, async user => {
  if (user) {

    const dbUsers = await getDoc(doc(db, "users", user.uid))

    let data = {
      uid: user.uid,
      full_name : user.full_name,
      email : user.email,
      emailVerified: user.emailVerified,
      ...dbUsers.data()
    }

    userHandle(data)
  } else {
    userHandle(false)
  }
})

export const login = async (email, password) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password)
    toast.success("Başarılı giriş yapıldı")
    return response.user
  } catch (err) {
    toast.error(err.code)
  }
}

export const register = async ({
  email,
  password,
  full_name,
  username
}) => {
  try {


    const user = await getDoc(doc(db, "username", username))
    if (user.exists()) {
      toast.error(`${username} kullanıcı adı başkası tarafından kullanılıyor`)
    } else {

      const response = await createUserWithEmailAndPassword(auth, email, password)

      if (response.user) {



        await setDoc(doc(db, "username", username), {
          uid: response.user.uid
        })

        await setDoc(doc(db, "users", response.user.uid), {
          full_name,
          username,
          followers: [],
          following: [],
          notifications: [],
        })

      }

      await updateProfile(auth.currentUser, {
        displayName: full_name,
      })

      toast.success("Başarıyla kayıt yapıldı...")
      return response.user


    }
  } catch (err) {
    toast.error(err.code)
  }
}


export const logout = async () => {
  try {
    await signOut(auth)
  } catch (err) {
    toast.error(err.code)
  }
}
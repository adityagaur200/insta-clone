import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAmaJMKh4XB5CQJqdjjg_GpCbeXh6aVnno",
  authDomain: "insta-clone-5771a.firebaseapp.com",
  projectId: "insta-clone-5771a",
  storageBucket: "insta-clone-5771a.appspot.com",
  messagingSenderId: "868657254487",
  appId: "1:868657254487:web:d90c5af71f777975011312",
  measurementId: "G-3481XML8DV"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export {app,auth,firestore,storage};

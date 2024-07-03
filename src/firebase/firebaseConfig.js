
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";




const firebaseConfig = {
  apiKey: "AIzaSyA6tLyU3CM4Tmu01AssiRD8eL_NCB_oZ_s",
  authDomain: "my-shop-d0a36.firebaseapp.com",
  projectId: "my-shop-d0a36",
  storageBucket: "my-shop-d0a36.appspot.com",
  messagingSenderId: "209924155303",
  appId: "1:209924155303:web:5bd5e03d164b2bf98c3882"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
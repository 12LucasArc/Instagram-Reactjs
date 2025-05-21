import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyA0W-l32UkmD12WLxnEhejvOKBogfe4Eq4",
  authDomain: "instagram-clone-bf1a3.firebaseapp.com",
  projectId: "instagram-clone-bf1a3",
  appId: "1:625820287822:web:5e69ec3fef4a717610d41f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
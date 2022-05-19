import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCA3Chaurs6x7zQzaFM98FqaJWkoGuIsio",
  authDomain: "movieapp-d190a.firebaseapp.com",
  projectId: "movieapp-d190a",
  storageBucket: "movieapp-d190a.appspot.com",
  messagingSenderId: "567689987240",
  appId: "1:567689987240:web:4a55c0d62ed0e7fbb8ae9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

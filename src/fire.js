import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyBeBC1gSPgR7Fiy5VtAtdTvD1LHQd7QOKw",
  authDomain: "starwars-381b0.firebaseapp.com",
  projectId: "starwars-381b0",
  storageBucket: "starwars-381b0.appspot.com",
  messagingSenderId: "342646478985",
  appId: "1:342646478985:web:66623e59412113a1500e58",
  measurementId: "G-SPFVGMHC2R",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
export const db = getDatabase(app);

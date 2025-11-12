import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebaseConfig";

const login = async (matricula:string, senha:string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, matricula, senha);
    return userCredential;
  } catch (error) {
    console.error('Falha no login', error);
  }  
};
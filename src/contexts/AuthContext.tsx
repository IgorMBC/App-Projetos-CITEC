import { signInWithEmailAndPassword, type UserCredential } from "firebase/auth";
import { auth } from "../services/firebaseConfig";

type LoginResult = {
  success: boolean;
  data?: UserCredential;
  message?: string;
}

export const login = async (matricula: string, senha: string): Promise<LoginResult> => {
  if (!matricula) {
    return {
      success: false,
      message: "Preencha o campo de matricula"
    }
  }

  if (!senha) {
    return {
      success: false,
      message: "Preencha o campo de senha"
    }
  }

  const email = `${matricula}@citec.com`;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, senha)
    return {
      success: true,
      data: userCredential
    };
  } catch (error: any) {
    let message = "Falha no login"
    switch (error.code) {
      case "auth/user-not-found":
        message = "Usuário não encontrado";
        break;
      case "auth/wrong-password":
        message = "Senha incorreta";
        break;
    }
    return { success: false, message };
  }
};
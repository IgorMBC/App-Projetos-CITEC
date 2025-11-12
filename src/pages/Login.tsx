import { getAuth, signInWithEmailAndPassword, type UserCredential } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Login(){
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const [erro, setErro] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setErro("");

        if (!email || !senha) {
        setErro("Por favor, preencha e-mail e senha.");
        return;
        }

        setLoading(true);

        const auth = getAuth(); // 🔹 Obtém a instância atual do Firebase Auth

        signInWithEmailAndPassword(auth, email, senha)
        .then((userCredential: UserCredential) => {
            // ✅ Login bem-sucedido
            const user = userCredential.user;
            console.log("Usuário autenticado:", user.email);

            // Redireciona pra página principal
            navigate("/");
        })
        .catch((error) => {
            // ❌ Erro de autenticação
            console.error(error.code, error.message);

            switch (error.code) {
            case "auth/invalid-email":
                setErro("E-mail inválido.");
                break;
            case "auth/user-not-found":
                setErro("Usuário não encontrado.");
                break;
            case "auth/wrong-password":
                setErro("Senha incorreta.");
                break;
            default:
                setErro("Erro ao fazer login. Tente novamente.");
            }
        })
        .finally(() => {
            setLoading(false);
        });
    };

    return
};

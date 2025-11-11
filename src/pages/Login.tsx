import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Eye, EyeOff, AlertCircle, Loader2 } from "lucide-react";
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

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50 p-4">
            <div className="w-full max-w-md">
                {/* Card principal */}
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                    
                    {/* Logo/Título */}
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">
                        Bem-vindo ao CITEc
                        </h1>
                        <p className="text-gray-500 text-sm">
                        Faça login para continuar
                        </p>
                    </div>

                    {/* Formulário */}
                    <form onSubmit={handleLogin} className="space-y-5">

                        {/* Campo de E-mail */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                E-mail
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="seu@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={loading}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition outline-none disabled:bg-gray-50 disabled:cursor-not-allowed"
                                autoComplete="email"
                            />
                        </div>

                        {/* Campo de Senha */}
                        <div>
                            <label htmlFor="senha" className="block text-sm font-medium text-gray-700 mb-2">
                                Senha
                            </label>
                            <div className="relative">
                                <input
                                    id="senha"
                                    type={mostrarSenha ? "text" : "password"}
                                    placeholder="••••••••"
                                    value={senha}
                                    onChange={(e) => setSenha(e.target.value)}
                                    disabled={loading}
                                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition outline-none disabled:bg-gray-50 disabled:cursor-not-allowed"
                                    autoComplete="current-password"
                                />
                                <button
                                    type="button"
                                    onClick={() => setMostrarSenha(!mostrarSenha)}
                                    disabled={loading}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition disabled:cursor-not-allowed"
                                    aria-label={mostrarSenha ? "Ocultar senha" : "Mostrar senha"}
                                >
                                    {mostrarSenha ? (
                                        <EyeOff className="w-5 h-5" />
                                    ) : (
                                        <Eye className="w-5 h-5" />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Mensagem de erro */}
                        {erro && (
                            <div className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-lg">
                                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                                <p className="text-sm text-red-700">{erro}</p>
                            </div>
                        )}

                        {/* Link de esqueci a senha */}
                        <div className="text-right">
                            <a
                                href="#"
                                className="text-sm text-blue-600 hover:text-blue-700 font-medium transition"
                            >
                                Esqueceu sua senha?
                            </a>
                        </div>

                        {/* Botão de login */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {loading ? (
                                <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                Entrando...
                                </>
                            ) : (
                                "Entrar"
                            )}
                        </button>
                    </form>

                    {/* Rodapé */}
                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-600">
                            Não tem uma conta?{" "}
                            <a href="#" className="text-blue-600 hover:text-blue-700 font-medium transition">
                                Criar conta
                            </a>
                        </p>
                    </div>
                </div>

                {/* Informação de demonstração */}
                <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="text-xs text-blue-800 text-center">
                        <strong>Demo:</strong> Use qualquer e-mail válido (exceto erro@teste.com) para simular login
                    </p>
                </div>
            </div>
        </div>
    );
};

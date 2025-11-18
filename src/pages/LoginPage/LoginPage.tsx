import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css"

export function LoginPage() {
    const navigate = useNavigate();
    
    const [matricula, setMatricula] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState("");

    const handleLogin = () => {
        setErro("");

        if (!matricula) {
            setErro("Digite sua matrícula");
            return;
        }

        if (!senha) {
            setErro("Digite sua senha")
            return;
        }

        if (matricula === "123456" && senha === "123456") {
            navigate("/projetos");
        } else {
            setErro("Matrícula ou senha incorretas.");
        }
    }

    return (
        <div className="login-page">
            <div className="login-page-inner">
                <main>
                    {/* Cabeçalho */}
                    <header>
                        <div className="login-page-logo">
                            <svg
                                width="54"
                                height="54"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                            >
                                <path
                                d="M12 3L2 9l10 6 10-6-10-6z"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                />
                                <path
                                d="M2 15l10 6 10-6"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                />
                            </svg>
                        </div>

                        <h2>PROJETOS</h2>
                        <h1><b>CITEC</b></h1>
                    </header>

                    {/* CAMPO MATRÍCULA */}
                    <label>
                        <article>
                            <input
                                type="text"
                                placeholder=" Matrícula "
                                value={matricula}
                                onChange={(e) => setMatricula(e.target.value)}
                                required
                            />
                            <span className="login-page-label">Matrícula</span>
                            <div className="login-page-border"></div>
                        </article>
                    </label>

                    {/* CAMPO SENHA */}
                    <label>
                        <article>
                            <input
                                type="password"
                                placeholder=" Senha "
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                                required
                            />
                            <span className="login-page-label">Senha</span>
                            <div className="login-page-border"></div>
                        </article>
                    </label>

                    {/* MENSAGEM DE ERRO */}
                    <div className="login-error-container">
                        {erro && <p key={erro} className="login-error">{erro}</p>}
                    </div>

                    {/* Botão Entrar */}
                    <section>
                        <button onClick={handleLogin}>
                        <span>Entrar</span>
                        </button>
                    </section>
                </main>
            </div>
        </div>
    );
}
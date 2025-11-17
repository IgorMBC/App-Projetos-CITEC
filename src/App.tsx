import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
//import type { JSX } from "react";
//import { useAuth } from "../src/contexts/AuthContext";
import './App.css'
import { Login } from "./pages/LoginPage/Login";
import { Projetos } from "./pages/Projetos";
import { CriarProjetos } from "./pages/CriarProjetos";
import { Sobre } from "./pages/Sobre";

/*
function PrivateRoute({ children }: {children: JSX.Element}){
  const { user, loading } = useAuth();

  if (loading) return <p>Carregando...</p>;
  if (!user) return <Navigate to="/login" replace />;

  return children;
}
*/

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota pública */}
        <Route path="/" element={<Login />} />

        {/* Rotas protegidas */}
        <Route
          path="/projetos"
          element={
              <Projetos />
          }
        />
        <Route
          path="/criar"
          element={
              <CriarProjetos />
          }
        />
        <Route
          path="/sobre"
          element={
              <Sobre />
          }
        />

        {/* Rota padrão (caso a URL não exista) */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

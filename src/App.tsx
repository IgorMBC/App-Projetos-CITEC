import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import type { JSX } from "react";
import { useAuth } from "../src/contexts/AuthContext";
import './App.css'
import { Login } from "./pages/Login";
import { Projetos } from "./pages/Projetos";
import { CriarProjetos } from "./pages/CriarProjetos";
import { Sobre } from "./pages/Sobre";

function PrivateRoute({ children }: {children: JSX.Element}){
  const { user, loading } = useAuth();

  if (loading) return <p>Carregando...</p>;
  if (!user) return <Navigate to="/login" replace />;

  return children;
}

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota pública */}
        <Route path="/login" element={<Login />} />

        {/* Rotas protegidas */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Projetos />
            </PrivateRoute>
          }
        />
        <Route
          path="/criar"
          element={
            <PrivateRoute>
              <CriarProjetos />
            </PrivateRoute>
          }
        />
        <Route
          path="/sobre"
          element={
            <PrivateRoute>
              <Sobre />
            </PrivateRoute>
          }
        />

        {/* Rota padrão (caso a URL não exista) */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

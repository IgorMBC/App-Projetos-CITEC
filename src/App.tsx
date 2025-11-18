import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css'
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { ProjetosPage } from "./pages/ProjetosPage/ProjetosPage";
import { CriarProjetos } from "./pages/CriarProjetos";
import { Sobre } from "./pages/Sobre";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota pública */}
        <Route path="/" element={<LoginPage />} />

        {/* Rotas protegidas */}
        <Route
          path="/projetos"
          element={
              <ProjetosPage />
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

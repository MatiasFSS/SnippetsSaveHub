import { Navigate, Route, Routes } from "react-router-dom";
import { Landing } from "../pages/Landing";
import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { SnippetView } from "../pages/SnippetView";

export const Navigation = () => {
  return (
    <div className="main-layout h-full">
      <Routes>
        {/* Rutas públicas (solo si no está logueado) */}
        <Route element={<PublicRoute />}>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* Rutas privadas (requieren login) */}
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/snippets" element={<SnippetView />} />
        </Route>

        {/* Ruta por defecto */}
        <Route path="/*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};


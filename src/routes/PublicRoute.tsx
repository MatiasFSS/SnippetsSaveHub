import { Navigate, Outlet } from "react-router-dom";
import { useCheckAuth } from "../hooks/useCheckAuth";

export const PublicRoute = () => {
  const status = useCheckAuth();

  if (status === "checking") {
    return <p className="text-center text-white mt-10">Cargando...</p>;
  }

  return status === "authenticated" ? <Navigate to="/dashboard" /> : <Outlet />;
};

import { Navigate, Outlet } from "react-router-dom";
import { useCheckAuth } from "../hooks/useCheckAuth";

export const PublicRoute = () => {
  const status = useCheckAuth();

  if (status === "checking") {
    return (
       <div className="flex items-center justify-center h-screen bg-gradient-to-br from-neutral-800 to-neutral-900">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-violet-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-white text-lg font-semibold animate-pulse">
            Cargando...
          </p>
        </div>
      </div>
    );
  }

  return status === "authenticated" ? <Navigate to="/dashboard" /> : <Outlet />;
};

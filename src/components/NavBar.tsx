import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import type { AppDispatch, RootState } from "../store/store";
import { startLogout } from "../store/auth/thunks";


export const NavBar = () => {
  const { status, displayName } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();

  const handleLogout = () => {
    dispatch(startLogout());
  };

  return (
    <nav className="bg-neutral-900 text-white w-full py-3 shadow-md">
      <div className="max-w-full mx-auto flex flex-wrap justify-between items-center px-4 sm:px-6 md:px-10">
        <Link to="/">
          <span className="text-xl font-bold text-violet-400">GitSnippetsHub</span>
        </Link>

        <div className="flex items-center gap-4">
          {/* Botón de Logout solo si está autenticado */}
          {status === "authenticated" && (
            <>
              <span className="text-sm text-violet-400">{displayName}</span>
              <button
                onClick={handleLogout}
                className="bg-violet-500 hover:bg-violet-600 px-3 py-1 rounded-lg text-sm transition"
              >
                Logout
              </button>
            </>
          )}

          <a
            href="https://github.com/tu-usuario/tu-repo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-400 transition"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
      </div>
    </nav>
  );
};




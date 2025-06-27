import { Link } from "react-router-dom";
import { SiJavascript, SiPython, SiTypescript, SiRuby, SiPhp, SiHtml5, SiCss3 } from "react-icons/si";
import 'animate.css';

export const Landing = () => {
  return (
    <div className="h-full from-neutral-800 to-neutral-900 px-6 py-12 flex flex-1 items-center justify-center ">
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl w-full">
        {/* Sección izquierda */}
        <div className="md:w-1/2 w-full animate__animated animate__fadeInLeft">
          <div className="bg-neutral-700 rounded-2xl shadow-2xl p-8 text-amber-50">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
              Bienvenido a la Gestión de Snippets
            </h1>
            <p className="text-base font-light mb-6">
              Organiza y accede a tus fragmentos de código favoritos de forma rápida, fácil y centralizada.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/register" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-violet-500 hover:bg-violet-600 active:bg-violet-700 transition px-6 py-3 rounded-lg text-white font-semibold">
                  Crear Cuenta
                </button>
              </Link>
              <Link to="/login" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-transparent border border-violet-500 hover:bg-violet-600 transition px-6 py-3 rounded-lg text-white font-semibold">
                  Iniciar Sesión
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Sección derecha */}
        <div className="md:w-1/2 w-full text-amber-50 animate__animated animate__fadeInDown">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Soporte para múltiples tecnologías</h2>
          <p className="text-base font-light mb-4">
            Crea, organiza y visualiza snippets para lenguajes como{" "}
            <span className="font-medium text-violet-400">JavaScript</span>,{" "}
            <span className="font-medium text-violet-400">Python</span>,{" "}
            <span className="font-medium text-violet-400">TypeScript</span>,{" "}
            <span className="font-medium text-violet-400">Ruby</span>, entre otros.
          </p>

          <div className="flex flex-wrap gap-4 text-5xl">
            <SiJavascript
              style={{ color: "#f7df1e" }}
              title="JavaScript"
              className="hover:scale-110 hover:brightness-125 hover:drop-shadow-lg transition-all duration-300"
            />
            <SiTypescript
              style={{ color: "#3178c6" }}
              title="TypeScript"
              className="hover:scale-110 hover:brightness-125 hover:drop-shadow-lg transition-all duration-300"
            />
            <SiPython
              style={{ color: "#3776AB" }}
              title="Python"
              className="hover:scale-110 hover:brightness-125 hover:drop-shadow-lg transition-all duration-300"
            />
            <SiRuby
              style={{ color: "#cc342d" }}
              title="Ruby"
              className="hover:scale-110 hover:brightness-125 hover:drop-shadow-lg transition-all duration-300"
            />
            <SiPhp
              style={{ color: "#777bb4" }}
              title="PHP"
              className="hover:scale-110 hover:brightness-125 hover:drop-shadow-lg transition-all duration-300"
            />
            <SiHtml5
              style={{ color: "#e34f26" }}
              title="HTML5"
              className="hover:scale-110 hover:brightness-125 hover:drop-shadow-lg transition-all duration-300"
            />
            <SiCss3
              style={{ color: "#1572b6" }}
              title="CSS3"
              className="hover:scale-110 hover:brightness-125 hover:drop-shadow-lg transition-all duration-300"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

import { Link } from "react-router-dom"

export const Landing = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col md:flex-row gap-8 max-w-6xl w-full p-4">
        <div className="md:w-1/2">
          <div className="w-full bg-neutral-700 rounded-xl shadow-xl/20 overflow-hidden p-6">
            <h1 className="font-bold text-2xl">Bienvenido a esta página de gestión de Snippets</h1>
            <p className="font-extralight mt-4">
              En esta página podrás gestionar todos tus Snippets de manera sencilla y rápida.
            </p>
            <div className="mt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link to="/register" className="w-full sm:w-auto">
                <button 
                  className="w-full sm:w-auto bg-violet-500 
                          hover:bg-violet-600 focus:outline-2 focus:outline-offset-2
                          focus:outline-violet-500 active:bg-violet-700 
                            px-4 py-2 rounded text-white"
                            >
                  Crear Cuenta
                </button>
              </Link>
              <Link to="/login" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-violet-500
                          hover:bg-violet-600 focus:outline-2 focus:outline-offset-2
                          focus:outline-violet-500 active:bg-violet-700 
                          px-4 py-2 rounded text-white"
                          >
                  Iniciar Sesión
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <h1 className="font-bold text-2xl">Podrás gestionar tus Snippets de diferentes tecnologías</h1>
          <p className="font-extralight mt-4">
            Podrás crear Snippets para lenguajes como JavaScript, Python, Java y muchos más.
          </p>
        </div>
      </div>
    </div>
  )
}



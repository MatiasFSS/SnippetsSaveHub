import { Link } from "react-router-dom"

export const Landing = () => {
  return (
   <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-neutral-800 to-neutral-900 px-6 py-12">
    <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl w-full">
      
      <div className="md:w-1/2 w-full">
        <div className="bg-neutral-700 rounded-2xl shadow-2xl p-8 text-amber-50">
          <h1 className="text-4xl font-bold mb-4 leading-tight">
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
      
      <div className="md:w-1/2 w-full text-amber-50">
        <h2 className="text-3xl font-bold mb-4">Soporte para múltiples tecnologías</h2>
        <p className="text-base font-light">
          Crea, organiza y visualiza snippets para lenguajes como <span className="font-medium text-violet-400">JavaScript</span>, <span className="font-medium text-violet-400">Python</span>, <span className="font-medium text-violet-400">Java</span>, entre otros.
        </p>
      </div>
    </div>
  </div>

  )
}



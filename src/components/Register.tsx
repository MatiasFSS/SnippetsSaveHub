
export const Register = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-neutral-800 to-neutral-900 px-4">
        <div className="w-full max-w-md bg-neutral-700 rounded-2xl shadow-xl p-6 sm:p-8 text-amber-50">
          <h1 className="text-3xl font-bold text-center mb-2">Registro</h1>
          <p className="text-center text-sm font-light mb-6">Crea una cuenta para acceder a todas las funciones.</p>

          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Nombre de Usuario"
              className="bg-amber-50 text-black px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 transition"
            />
            <input
              type="email"
              placeholder="Correo Electrónico"
              className="bg-amber-50 text-black px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 transition"
            />

            <input
              type="password"
              placeholder="Contraseña"
              className="bg-amber-50 text-black px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 transition"
            />
             <input
              type="password"
              placeholder="Confirmar Contraseña"
              className="bg-amber-50 text-black px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 transition"
            />

            <button
              type="submit"
              className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 text-white py-3 rounded-lg font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
            >
              Registrarse
            </button>

            <p className="text-center text-sm mt-2">
              ¿Ya tienes una cuenta?{" "}
              <a href="/login" className="text-violet-400 hover:underline">Inicia Sesión</a>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}


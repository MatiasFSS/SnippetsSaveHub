

export const Login = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-neutral-800 to-neutral-900 px-4">
        <div className="w-full max-w-md bg-neutral-700 rounded-2xl shadow-xl p-6 sm:p-8 text-amber-50">
          <h1 className="text-3xl font-bold text-center mb-2">Iniciar Sesión</h1>
          <p className="text-center text-sm font-light mb-6">Ingresa tus credenciales para acceder a tu cuenta.</p>

          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Nombre de Usuario"
              className="bg-amber-50 text-black px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 transition"
            />
            <input
              type="password"
              placeholder="Contraseña"
              className="bg-amber-50 text-black px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 transition"
            />

            <button
              type="submit"
              className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 text-white py-3 rounded-lg font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
            >
              Iniciar Sesión
            </button>

            <p className="text-center text-sm mt-2">
              ¿No tienes una cuenta?{" "}
              <a href="/register" className="text-violet-400 hover:underline">Regístrate</a>
            </p>
          </form>
        </div>
      </div>

      
    </>
  )
}


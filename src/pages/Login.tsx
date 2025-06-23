import { AuthForm } from "../components/AuthForm"


export const Login = () => {
  return (
    <>
      <AuthForm
        title="Iniciar Sesión"
        subtitle="Ingresa tus credenciales para acceder a tu cuenta."
        buttonText="Iniciar Sesión"
        redirectText="¿No tienes una cuenta?"
        redirectLinkText="Regístrate"
      >
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
        </AuthForm>
    </>
  )
}


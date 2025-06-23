import { AuthForm } from "../components/AuthForm"

export const Register = () => {
  return (
    <>
      <AuthForm
        title="Registro"
        subtitle="Crea una cuenta para acceder a todas las funciones."
        buttonText="Registrarse"
        redirectText="¿Ya tienes una cuenta?"
        redirectLinkText="Inicia Sesión"
      >
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
    </AuthForm>
           
         
    </>
  )
}


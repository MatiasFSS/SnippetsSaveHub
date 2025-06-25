import type { FormEvent } from "react"
import { useForm } from "../hooks/useForm"
import type { LoginFormData } from "../interface/interface"
import { useDispatch } from "react-redux"
import type { AppDispatch } from "../store/store";
import { startLoginWithEmailPassword, startLoginWithGoogle } from "../store/auth/thunks";



export const Login = () => {

  const dispatch = useDispatch<AppDispatch>()   
  
  const {
        formData, onChange
    } = useForm<LoginFormData>({
        email: '',
        password: '',
    })

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        dispatch(startLoginWithEmailPassword(formData))
    }

    const onGoogleSignIn = () => {
      dispatch(startLoginWithGoogle());
    };
    
  return (
    <>
     <div className="h-full bg-gradient-to-br from-neutral-800 to-neutral-900 px-4 flex flex-1 items-center justify-center">
        <div className="w-full max-w-md bg-neutral-700 rounded-2xl shadow-xl p-6 sm:p-8 text-amber-50">
          <h1 className="text-3xl font-bold text-center mb-2">Iniciar Sesión</h1>
          <p className="text-center text-sm font-light mb-6">Ingresa tus credenciales para acceder a tu cuenta.</p>

           <form className="flex flex-col gap-4" onSubmit={onSubmit}>
            <input
              type="email"
              placeholder="Correo Electrónico"
              className="bg-amber-50 text-black px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 transition"
              onChange={onChange}
              name="email"
             
            />
            <input
              type="password"
              placeholder="Contraseña"
              className="bg-amber-50 text-black px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 transition"
              onChange={onChange}
              name="password"
            />

            <button
              type="submit"
              className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 text-white py-3 rounded-lg font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500" 
            >
              Iniciar Sesión
            </button>

             <p className="text-center text-sm mt-2">
                ¿No tienes una cuenta?{" "}
                <a href="/register" className="text-violet-400 hover:underline">Registrate</a>
            </p>

            <div className="flex items-center my-1">
              <div className="flex-grow h-px bg-amber-50/20" />
              <span className="px-4 text-sm text-amber-50/70">o</span>
              <div className="flex-grow h-px bg-amber-50/20" />
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => dispatch(onGoogleSignIn)}
                className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-lg border border-white/20 hover:bg-white/10 transition text-white"
              >
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
                Iniciar con Google
              </button>

              <button
                type="button"
                onClick={() => console.log("Iniciar con GitHub")}
                className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-lg border border-white/20 hover:bg-white/10 transition text-white"
              >
                <img src="https://www.svgrepo.com/show/512317/github-142.svg" alt="GitHub" className="w-5 h-5" />
                Iniciar con GitHub
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}


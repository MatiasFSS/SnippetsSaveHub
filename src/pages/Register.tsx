import type { FormEvent } from "react";
import { useForm } from "../hooks/useForm";
import type { RegisterFormData } from "../interface/interface";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store/store";
import { startRegisterWithEmailPassword } from "../store/auth/thunks";


export const Register = () => {

  const dispatch = useDispatch<AppDispatch>()   
  const {
    formData, onChange
  } = useForm<RegisterFormData>({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

   const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }
    
    console.log("Datos para registrar:", formData);
    dispatch(startRegisterWithEmailPassword(formData));
  };
 
  return (
    <>
     <div className="h-full bg-gradient-to-br from-neutral-800 to-neutral-900 px-4 flex flex-1 items-center justify-center">
        <div className="w-full max-w-md bg-neutral-700 rounded-2xl shadow-xl p-6 sm:p-8 text-amber-50 animate__animated animate__fadeIn">
          <h1 className="text-3xl font-bold text-center mb-2">Crea tu cuenta</h1>
          <p className="text-center text-sm font-light mb-6">Completa el siguiente formulario para registrarte.</p>

           <form className="flex flex-col gap-4" onSubmit={onSubmit}>
              <input
                type="text"
                placeholder="Nombre de Usuario"
                className="bg-amber-50 text-black px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 transition"
                onChange={onChange}
                name="username"
              />
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
                <input
                type="password"
                placeholder="Confirmar Contraseña"
                className="bg-amber-50 text-black px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 transition"
                onChange={onChange}
                name="confirmPassword"
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


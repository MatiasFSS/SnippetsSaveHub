import { loginWithEmailPassword, signInWithGoogle, registerUserWithEmailPassword, logoutFirebase } from "../../firebase/providers";
import type { LoginFormData, RegisterFormData } from "../../interface/interface";
import type { AppDispatch } from "../store";
import { checkingCredentials, login, logout } from "./authSlice";

export const startLoginWithEmailPassword = (credentials: LoginFormData) => {
  return async (dispatch: AppDispatch) => {
    dispatch(checkingCredentials()); // Estado: "checking"

    const result = await loginWithEmailPassword(credentials); // Llama Firebase

    if (!result.ok) {
      return dispatch(logout({ errorMessage: result.errorMessage }));
    }

    dispatch(login({
        uid: result.uid!,
        email: result.email!,
        displayName: result.displayName || ''
    })); // Login exitoso
  };
};

export const startLoginWithGoogle = () => {

    return async (dispatch: AppDispatch) => {

        dispatch(checkingCredentials()); // Estado: "checking"
        const result = await signInWithGoogle()

        if (!result.ok) {
            return dispatch(logout({ errorMessage: result.errorMessage }));
        }

        dispatch(login({
             uid: result.uid!,
            email: result.email!,
            displayName: result.displayName || ''
        })); // Login exitoso
    }
}

export const startRegisterWithEmailPassword = (data: RegisterFormData)=> {
    return async (dispatch: AppDispatch) => {
        dispatch(checkingCredentials()); // Estado: "checking"

        const result = await registerUserWithEmailPassword(data); // Llama Firebase

        if (!result.ok) {
            return dispatch(logout({ errorMessage: result.errorMessage }));
        }

        dispatch(login({
            uid: result.uid!,
            email: result.email!,
            displayName: result.displayName || ''
        }));
    }
}

export const startLogout = () => {
    return async (dispatch: AppDispatch) => {
        
        await logoutFirebase() 
        dispatch(logout({}))


    }
}
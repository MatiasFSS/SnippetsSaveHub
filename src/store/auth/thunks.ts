
import { sendEmailVerification } from "firebase/auth";
import { auth } from "../../firebase/firebase-config";
import { loginWithEmailPassword, signInWithGoogle, registerUserWithEmailPassword, logoutFirebase, signInWithGithub } from "../../firebase/providers";
import type { LoginFormData, RegisterFormData } from "../../interface/interface";
import { clearSnippetAuth } from "../snippets/snippetsSlice";
import type { AppDispatch } from "../store";
import { checkingCredentials, login, logout } from "./authSlice";


export const startLoginWithEmailPassword = (credentials: LoginFormData) => {
  return async (dispatch: AppDispatch) => {
        dispatch(checkingCredentials());

        const result = await loginWithEmailPassword(credentials);

        if (!result.ok) {
        dispatch(logout({ errorMessage: result.errorMessage }));
        return result;
        }

        // ⛔ Bloquear si no ha verificado su correo
        if (!auth.currentUser?.emailVerified) {
        await logoutFirebase();
        dispatch(logout({ errorMessage: "Debes verificar tu correo antes de iniciar sesión." }));
        return { ok: false, errorMessage: "Correo no verificado" };
        }

        dispatch(login({
        uid: result.uid!,
        email: result.email!,
        displayName: result.displayName || ''
        }));

        return result;
    };
};

export const startLoginWithGoogle = () => {

    return async (dispatch: AppDispatch) => {
        dispatch(checkingCredentials());

        const result = await signInWithGoogle();

        if (!result.ok) {
        dispatch(logout({ errorMessage: result.errorMessage }));
        return result;
        }

        dispatch(login({
        uid: result.uid!,
        email: result.email!,
        displayName: result.displayName || '',
        }));

        return result;
  };
}

export const startLoginWithGithub = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(checkingCredentials());

    const result = await signInWithGithub();

    if (!result.ok) {
      dispatch(logout({ errorMessage: result.errorMessage }));
      return result;
    }

    dispatch(login({
      uid: result.uid!,
      email: result.email!,
      displayName: result.displayName || '',
    }));

    return result;
  };
};

export const startRegisterWithEmailPassword = (data: RegisterFormData)=> {
    return async (dispatch: AppDispatch) => {
        dispatch(checkingCredentials());

        const result = await registerUserWithEmailPassword(data);

        if (!result.ok) {
        dispatch(logout({ errorMessage: result.errorMessage }));
        return result;
        }

        // Enviar correo de verificación
        if (auth.currentUser && !auth.currentUser.emailVerified) {
        await sendEmailVerification(auth.currentUser);
        }

        dispatch(login({
        uid: result.uid!,
        email: result.email!,
        displayName: result.displayName || ''
        }));

        return result;
    }
}

export const startLogout = () => {
    return async (dispatch: AppDispatch) => {
        
        await logoutFirebase() 
        dispatch(clearSnippetAuth())
        dispatch(logout({}))


    }
}
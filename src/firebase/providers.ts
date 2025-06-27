import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { auth as FirebaseAuth } from "./firebase-config";
import type { LoginFormData, RegisterFormData } from "../interface/interface";

const auth = getAuth();

export const signInWithGoogle = async () => {
 
  const provider = new GoogleAuthProvider();

  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    return {
      ok: true,
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
    };
  } catch (error: any) {
    
    if (error.code === "auth/popup-closed-by-user") {
      return {
        ok: false,
        errorMessage: "Inicio de sesión cancelado por el usuario",
      };
    }

    // Otros errores
    return {
      ok: false,
      errorMessage: error.message || "Error desconocido al iniciar sesión con Google",
    };
  }
};


export const signInWithGithub = async () => {
  try {
    const result = await signInWithPopup(auth, new GithubAuthProvider);

    const user = result.user;

    return {
      ok: true,
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
    };
  } catch (error: any) {
    return {
      ok: false,
      errorMessage: error.message,
    };
  }
};

export const registerUserWithEmailPassword = async ({ email, password, username}: RegisterFormData) => {
  try {
    const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
    const { uid } = resp.user;

    await updateProfile(FirebaseAuth.currentUser!, { displayName: username });

    return {
      ok: true,
      uid,
      email,
      displayName: username
    };
  } catch (error) {
    if (error instanceof Error) {
      return { ok: false, errorMessage: error.message };
    }
    return { ok: false, errorMessage: "Error desconocido" };
  }
};

export const loginWithEmailPassword = async ({ email, password }: LoginFormData) => {
  try {
    const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password);
       const { uid, displayName, email: userEmail } = resp.user;

    return {
      ok: true,
      uid,
      displayName,
      email: userEmail
    };
  } catch (error) {
    if (error instanceof Error) {
      return { ok: false, errorMessage: error.message };
    }
    return { ok: false, errorMessage: "Error desconocido" };
  }
};

export const logoutFirebase = async () => {
  return await FirebaseAuth.signOut();
};

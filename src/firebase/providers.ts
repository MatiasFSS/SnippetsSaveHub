import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { auth as FirebaseAuth } from "./firebase-config";
import type { LoginFormData, RegisterFormData } from "../interface/interface";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    const { displayName, email, uid } = result.user;

    return {
      ok: true,
      displayName,
      email,
      uid
    };
  } catch (error) {
    if (error instanceof Error) {
      return { ok: false, errorMessage: error.message };
    }
    return { ok: false, errorMessage: "Error desconocido" };
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

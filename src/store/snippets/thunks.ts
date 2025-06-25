import {savingSnippet, setSaving, setSnippet, deleteSnippet, addNewSnippet, updateSnippet, activeSnippet} from './snippetsSlice'
import { FirebaseDB } from "../../firebase/firebase-config"
import { collection, deleteDoc, doc, setDoc } from 'firebase/firestore/lite'
import type { AppDispatch, RootState } from '../store';
import { loadSnippets } from '../../helpers/loadSnippet';


export const newSnippet = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(savingSnippet());

    // Snippet vacío sin id aún
    const newSnippet = {
      id: '', // necesario para que el slice lo acepte
      title: "",
      tech: "",
      code: "",
      desc: "",
      date: new Date().toISOString(),
    };

    dispatch(activeSnippet(newSnippet));
  };
};

export const startLoadingSnippet = () => {
    return async (dispatch: AppDispatch, getState: () => RootState) => {
        const {uid} = getState().auth
        if(!uid) throw new Error('El UID del usuario no existe')
        const notes = await loadSnippets(uid)
        dispatch(setSnippet(notes))
    }
}

export const startSaveSnippet = () => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(setSaving());

    const { uid } = getState().auth;
    const { active: snippet } = getState().snippet;

    if (!snippet) throw new Error("No hay snippet activo");

    const snippetToFirestore = { ...snippet };
    delete snippetToFirestore.id;

    // Si no tiene id, es un nuevo snippet
    if (!snippet.id) {
      const newDoc = doc(collection(FirebaseDB, `users/${uid}/snippets`));
      await setDoc(newDoc, snippetToFirestore);
      const snippetWithId = { ...snippet, id: newDoc.id };

      dispatch(addNewSnippet(snippetWithId));
      dispatch(activeSnippet(snippetWithId));
      return;
    }

    // Si ya tiene id, actualizar
    const docRef = doc(FirebaseDB, `users/${uid}/snippets/${snippet.id}`);
    await setDoc(docRef, snippetToFirestore, { merge: true });

    dispatch(updateSnippet({ ...snippet }));
  };
};

export const startDeletingSnippet = () => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    const { uid } = getState().auth;
    const { active: snippet } = getState().snippet;

    if (!snippet || !snippet.id) {
      throw new Error("No hay snippet activo para eliminar");
    }

    const docRef = doc(FirebaseDB, `users/${uid}/snippets/${snippet.id}`);
    await deleteDoc(docRef);

    dispatch(deleteSnippet(snippet.id));  // dispatch solo con el id
  };
};
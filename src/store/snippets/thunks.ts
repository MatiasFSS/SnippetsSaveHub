import {savingSnippet, setSaving, setSnippet, deleteSnippet, addNewSnippet, updateSnippet, activeSnippet} from './snippetsSlice'
import { FirebaseDB } from "../../firebase/firebase-config"
import { collection, deleteDoc, doc, setDoc } from 'firebase/firestore/lite'
import type { AppDispatch, RootState } from '../store';
import { loadSnippets } from '../../helpers/loadSnippet';


export const newSnippet = () => {
    return async (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(savingSnippet());

    const { uid } = getState().auth;

    // Aquí creamos el objeto sin id ni date con tipo number
    const newSnippet = {
      title: "",
      tech: "",
      code: "",
      desc: "",
      date: new Date().toISOString(), // date como string ISO
    };

    const newDoc = doc(collection(FirebaseDB, `users/${uid}/snippets`));
    await setDoc(newDoc, newSnippet);

    // Agregamos el id generado por Firestore al objeto
    const snippetWithId = { ...newSnippet, id: newDoc.id };

    dispatch(addNewSnippet(snippetWithId));
    dispatch(activeSnippet(snippetWithId));
  };

}

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

    if (!snippet || !snippet.id) {
      throw new Error("No hay snippet activo para guardar");
    }

    const snippetToFireStore = { ...snippet };
    delete snippetToFireStore.id; // Para no guardar el id dentro del documento

    const docRef = doc(FirebaseDB, `users/${uid}/snippets/${snippet.id}`);
    await setDoc(docRef, snippetToFireStore, { merge: true });

    dispatch(updateSnippet(snippet));
  };
}

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
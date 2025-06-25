import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/firebase-config";
import type { Data } from "../interface/interface";

export const loadSnippets = async (uid = ""): Promise<Data[]> => {
  if (!uid) throw new Error("El UID del usuario no existe");

  const collectionRef = collection(FirebaseDB, `users/${uid}/snippets`); // ✅ RUTA CORRECTA
  const docs = await getDocs(collectionRef);

  const snippets: Data[] = [];

  docs.forEach(doc => {
    const data = doc.data();
    snippets.push({
      id: doc.id,
      title: data.title ?? '',
      tech: data.tech ?? '',
      code: data.code ?? '',
      desc: data.desc ?? '',
      date: data.date ?? '',
    });
  });

  return snippets;
};
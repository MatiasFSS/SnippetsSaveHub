import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";

import { login, logout } from "../store/auth/authSlice";
import { auth as FirebaseAuth } from "../firebase/firebase-config";
import type { RootState } from "../store/store";
import type { AppDispatch } from "../store/store";

export const useCheckAuth = () => {
  const { status } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return dispatch(logout({}));

      const { uid, email, displayName } = user;

      dispatch(login({
        uid,
        email: email ?? "",
        displayName: displayName ?? ""
      }));
    });

    return () => unsubscribe();
  }, [dispatch]);

  return status;
};
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  status: "checking" | "authenticated" | "not-authenticated";
  uid: string | null;
  email: string | null;
  displayName: string | null;
  errorMessage?: string | null;
}

const initialState: AuthState = {
  status: "checking",
  uid: null,
  email: null,
  displayName: null,
  errorMessage: null
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, { payload }: PayloadAction<{ uid: string; email: string; displayName: string }>) => {
      state.status = "authenticated";
      state.uid = payload.uid;
      state.email = payload.email;
      state.displayName = payload.displayName;
      state.errorMessage = null;
    },
    logout: (state, { payload }: PayloadAction<{ errorMessage?: string }>) => {
      state.status = "not-authenticated";
      state.uid = null;
      state.email = null;
      state.displayName = null;
      state.errorMessage = payload?.errorMessage;
    },
    checkingCredentials: (state) => {
      state.status = "checking";
    },
  },
});

export const { login, logout, checkingCredentials } = authSlice.actions;
export default authSlice.reducer;
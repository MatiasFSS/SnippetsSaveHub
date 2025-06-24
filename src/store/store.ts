import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import snippetSlice from './snippets/snippetsSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    snippet: snippetSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
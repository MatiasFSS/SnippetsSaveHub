import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import { Snippets } from './Snippets.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <Snippets />
       <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        toastClassName="!bg-neutral-800 !border-l-4 !border-violet-500 !text-white !rounded-md !shadow-md"
        progressClassName="!bg-violet-500"
      />
    </BrowserRouter>
    </Provider>
  </StrictMode>,
)

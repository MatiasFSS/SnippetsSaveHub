import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import { Snippets } from './Snippets.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <Snippets />
    </BrowserRouter>
    </Provider>
  </StrictMode>,
)

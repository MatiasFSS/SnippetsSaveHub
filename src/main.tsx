import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import { Snippets } from './Snippets.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Snippets />
    </BrowserRouter>
  </StrictMode>,
)

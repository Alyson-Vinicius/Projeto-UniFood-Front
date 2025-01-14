import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Produto from './pages/produto'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Produto />
  </StrictMode>,
)

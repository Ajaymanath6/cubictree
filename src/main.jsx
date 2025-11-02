import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

// Get base path from Vite
const base = import.meta.env.BASE_URL

// Debug logging (will be removed in production minification)
console.log('CBP App Initializing...')
console.log('Base URL:', base)
console.log('Current Path:', window.location.pathname)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={base}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)

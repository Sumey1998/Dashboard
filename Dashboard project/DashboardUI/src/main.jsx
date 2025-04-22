import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { DarkThemProvider } from "./context/DarkModeContext";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
        <DarkThemProvider>
          <App />
        </DarkThemProvider>
      </BrowserRouter>
  </StrictMode>,
)

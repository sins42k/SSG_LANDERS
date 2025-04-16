import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import NavBar from './components/NavBar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <body>
      <NavBar />
    </body>
  </StrictMode>,
)
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Menu from './Menu.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='flex bg-slate-100'>
    <Menu />
    <App />
    </div>
  </StrictMode>,
)

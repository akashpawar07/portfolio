import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='dark:text-gray-300 dark:bg-slate-900'>
      <App />
    </div>
  </StrictMode>,
)

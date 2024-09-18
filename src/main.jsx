import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ApplicationViews } from './ApplicationViews.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApplicationViews />
  </StrictMode>,
)

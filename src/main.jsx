import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouteApp } from './routes'
import {Analytics} from '@vercel/analytics/react'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouteApp/>
    <Analytics/>
  </StrictMode>,
)

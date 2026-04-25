import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { router } from './router/Route'
import CheckInProvider from './context/CheckInProvider'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CheckInProvider>
      <RouterProvider router={router} />
    </CheckInProvider>
  </StrictMode>,
)

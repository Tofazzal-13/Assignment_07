import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { router } from './router/Route'
import { TimelineProvider } from './context/TimelineContext'
import { ToastContainer } from 'react-toastify'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TimelineProvider>
      <ToastContainer /> 
      <RouterProvider router={router} />
    </TimelineProvider>
  </StrictMode>,
)

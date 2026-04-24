import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import RootLayout from './layout/RootLayout'
import Homepage from './pages/homepage/Homepage'
import TimeLine from './pages/timeline/TimeLine'
import Stats from './pages/stats/Stats'

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children:[
      {
        index: true,
        Component: Homepage,
        loader: ()=> fetch("/friends.json")
      },
      {
        path: "/fr"

      },
      {
        path: "/timeline",
        Component: TimeLine
      },
      {
        path: "/stats",
        Component: Stats
      }
    ],
    errorElement: <h2>This page is not found</h2>
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
  
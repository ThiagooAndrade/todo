import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { DatesContextProvider } from './hooks/useDates'
import router from './routes'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DatesContextProvider>
      <RouterProvider router={router} />
    </DatesContextProvider>
  </StrictMode>,
)

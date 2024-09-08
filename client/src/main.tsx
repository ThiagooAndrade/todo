import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { TasksContextProvider } from './hooks/useTasks'
import router from './routes'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TasksContextProvider>
      <RouterProvider router={router} />
    </TasksContextProvider>
  </StrictMode>,
)

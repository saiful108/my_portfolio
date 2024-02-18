import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router/Router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <div className='bg-[#111A28] text-white max-w-7xl mx-auto px-10'>
  <RouterProvider router={router} />
  </div>
     
  </React.StrictMode>,
)

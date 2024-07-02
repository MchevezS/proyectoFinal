import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Login from './componentes/Login.jsx'
import Registrarse from './componentes/Registrarse.jsx'
import FormularioArticulos from './componentes/FormularioArticulos.jsx'


const router = createBrowserRouter([
  {
    path:"/",
    element:<Login/>
  },
  {
    path:"/Inicio",
    element:<Login/>
  },
  {
    path:"/Registro",
    element:<Registrarse/>
  },
  {
    path:"/Productos",
    element:<FormularioArticulos/>
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)

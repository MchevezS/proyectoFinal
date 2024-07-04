import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import FormularioArticulos from './componentes/Principal/FormularioArticulos.jsx'
import Navbar from './componentes/Principal/NavBar.jsx'
import Registrarse from './componentes/Principal/Registrarse.jsx'
import Login from './componentes/Principal/Login.jsx'

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
  {
    path:"/Navbar",
    element:<Navbar/>
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)

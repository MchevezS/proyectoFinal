import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import FormularioArticulos from './componentes/Principal/FormularioArticulos.jsx'
import Navbar from './componentes/Principal/NavBar.jsx'
import Registrarse from './componentes/Principal/Registrarse.jsx'
import Login from './componentes/Principal/Login.jsx'
import Home from './paginas/Home.jsx'
import Moca from '/src/JS/Moca.jsx'
import Capuchino from './JS/Capuchino.jsx'
import Expreso from './JS/Expreso.jsx'
import Postres from './JS/Postres.jsx'

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
    path:"/Home",
    element:<Home/>
  },
   {
     path:"/Moca",
    element:<Moca/>
   },
   {
    path:"/Capuchino",
   element:<Capuchino/>
  },
  {
    path:"/Expreso",
   element:<Expreso/>
  },
  {
    path:"/Postres",
   element:<Postres/>
  },




])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)

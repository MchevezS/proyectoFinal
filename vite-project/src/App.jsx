
import {useState} from 'react'
import './App.css'
import Login from './componentes/Principal/Login'
import Registrarse from './componentes/Principal/Registrarse'
import FormularioArticulos from './componentes/Principal/FormularioArticulos'
import Navbar from './componentes/Principal/NavBar'
import "/src/index.css"

function App() {
  const [pagina, setPagina]=useState(false)

  function cambioPag() {
    console.log('se ejecuta');
    setPagina(!pagina)
  }

  return (
    <>
   { pagina?<Registrarse cambioPG={cambioPag}/>:<Login cambioPG={cambioPag}/>}

    </>
  )
}

export default App

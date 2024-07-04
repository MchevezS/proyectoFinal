
import {useState} from 'react'
import './App.css'
import Login from './componentes/Principal/Login'
import Registrarse from './componentes/Principal/Registrarse'
import FormularioArticulos from './componentes/Principal/FormularioArticulos'
import Navbar from './componentes/Principal/NavBar'

function App() {
  const [pagina, setPagina]=useState(false)

  function cambioPag() {
    console.log('se ejecuta');
    setPagina(!pagina)
  }

  return (
    <>
   { pagina?<Registrarse cambioPG={cambioPag}/>:<Login cambioPG={cambioPag}/>}
      <h1>holaa</h1>
      <Navbar></Navbar>

    </>
  )
}

export default App


import { useState } from 'react'
import './App.css'
import Login from './componentes/Login'
import Registrarse from './componentes/Registrarse'
import FormularioArticulos from './componentes/FormularioArticulos'

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
      <FormularioArticulos/>
    </>
  )
}

export default App

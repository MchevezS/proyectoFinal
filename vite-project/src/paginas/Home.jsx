import React, { useEffect, useState } from 'react'
import { useState } from 'react'
import ContenedorCards from '../componentes/Principal/ContenedorCards'
import { FormularioDelete } from '../componentes/fetchs/FormularioDelete'
import { FormularioGet } from '../componentes/fetchs/FormularioGet'

const Home = () => {
    const [data, setaData] = useState([])
    
    async function producto() { // estamos obteniendo los datos que se guardaron el en post y con el get voy a mostrarlos
        const data = await FormularioGet()
        console.log(data);
        setaData(data)
    }
    
    useEffect(()=>{
        producto()
    },[])
    async function btnEliminar(id) {
        await FormularioDelete(id)
    }

  return (
    <div>
      <ContenedorCards botonEliminar={btnEliminar} getCafe={data}/>
    </div>
  )
}

export default Home


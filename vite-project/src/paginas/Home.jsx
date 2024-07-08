
import ContenedorCards from '../componentes/Principal/ContenedorCards'
import { FormularioDelete } from '../componentes/fetchs/FormularioDelete'
import { FormularioGet } from '../componentes/fetchs/FormularioGet'
import Cards from '../componentes/Principal/Cards'
import MejorCategoria from '../componentes/Principal/MejorCategoria'
import MejoresProductos from '../componentes/Principal/MejoresProductos'
import InfoContacto from '../componentes/Principal/InfoContacto'
import InfoCafeteria from '../componentes/Principal/InfoCafeteria'
import Navbar from '../componentes/Principal/NavBar'
import React, { useEffect, useState } from 'react'
 
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
    <Navbar></Navbar>
      <MejorCategoria/>
      <ContenedorCards botonEliminar={()=>{btnEliminar}} getCafe={data}/>
        <Cards/>
       <MejoresProductos/>
     <InfoContacto/>
     <InfoCafeteria/>
    </div>
  )
}

export default Home


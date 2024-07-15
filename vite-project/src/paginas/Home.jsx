
import ContenedorCards from '../componentes/Principal/ContenedorCards'
import { FormularioDelete } from '../componentes/fetchs/FormularioDelete'
import { FormularioGet } from '../componentes/fetchs/FormularioGet'
import Cards from '../componentes/Principal/Cards'
import MejorCategoria from '../componentes/Principal/MejorCategoria'
import MejoresProductos from '../componentes/Principal/MejoresProductos'
import InfoContacto from '../componentes/Principal/InfoContacto'
import InfoCafeteria from '../componentes/Principal/InfoCafeteria'
import Navbar from '../componentes/Principal/NavBar'
import React, { useEffect, useRef, useState } from 'react'
import BarraBusqueda from '../componentes/Principal/BarraBusqueda'
import '/src/index.css'

const Home = () => {
      const [data, setData] = useState([])
    const dataRef = useRef([])
    async function producto() { // estamos obteniendo los datos que se guardaron el en post y con el get voy a mostrarlos
        const data = await FormularioGet()
        console.log(data);
        setData(data)
        dataRef.current = data
    }

    useEffect(()=>{
        producto()
    },[data])


    async function btnEliminar(id) {
        await FormularioDelete(id)
        
    }

  return (
    <div>
    <Navbar></Navbar>
    <BarraBusqueda  placeholder={"Buscar"} setData = {setData} dataRef= {dataRef}/> 
      <MejorCategoria/>
      <ContenedorCards botonEliminar={()=>{btnEliminar}} getCafe={data}/>
       <MejoresProductos/>
        {/* <Carousel/>  */}
     <InfoContacto/>
     <InfoCafeteria/>
    </div>
  )
}

export default Home


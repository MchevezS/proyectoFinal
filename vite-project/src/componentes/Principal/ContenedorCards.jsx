import React from 'react'
import Cards from './Cards'
import { FormularioDelete } from '../fetchs/FormularioDelete'

const ContenedorCards = ({getCafe, btnEliminar,btnEditar,mostrarBotones}) => {
 const elimina= async(id)=>{
  await FormularioDelete(id)
 }
console.log(getCafe);
  return (
    <div>                   
     {/* esto es para que vaya revisando cada uno de los productos que tengo  */}
        {getCafe.map(cafe =>(
        <Cards
          key={cafe.id}
          nombre={cafe.nombre}
          precio={cafe.costo}
          descripcion={cafe.informacion}
          imagen={cafe.imagen}
          botonEliminar ={()=>elimina(cafe.id)}
          btnEditar={()=> btnEditar(pul.id)}
          mostrarBotones={mostrarBotones}
        />
      ) )}  
    </div>
  )
}

export default ContenedorCards

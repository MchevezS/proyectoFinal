import React from 'react'
import Cards from './Cards'
import { FormularioDelete } from '../fetchs/FormularioDelete'

const ContenedorCards = ({getCafe, botonEliminar}) => {
 const elimina= async(id)=>{
  await FormularioDelete(id)
 }

  return (
    <div>                   
     {/* esto es para que vaya revisando cada uno de los productos que tengo  */}
      {getCafe.map(cafe =>(
        <Cards
          key={cafe.id}
          nombre={cafe.informacion}
          precio={cafe.costo}
          descripcion={cafe.ingredientes}
          botonEliminar ={()=>elimina(cafe.id)}
        />
      ) )}
    </div>
  )
}

export default ContenedorCards

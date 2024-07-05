import React from 'react'
import Cards from './Cards'

const ContenedorCards = (getCafe, botonEliminar) => {
 


  return (
    <div>                   
     {/* esto es para que vaya revisando cada uno de los productos que tengo  */}
      {getCafe.map(cafe =>(
        <Cards
        key={cafe.id}
          nombre={cafe.nombre}
          precio={cafe.precio}
          descripcion={cafe.descripcion}
     
          botonEliminar ={()=>botonEliminar(cafe.id)}
        />



      ) )}
    </div>
  )
}

export default ContenedorCards

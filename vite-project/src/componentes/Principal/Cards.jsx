import React from 'react'

 function Cards({nombre, precio, descripcion, botonEliminar}) { //  estamos obteniendo los parametros del post 
  return (
    <div>
      <h1>{nombre}</h1>
      <h2>{precio}</h2>
      <p>{descripcion}</p>
      <button onClick={botonEliminar}>Eliminar productos</button>
    </div>
  )
}
export default Cards
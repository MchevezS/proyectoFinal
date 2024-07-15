import React from 'react'

 function Cards({nombre, precio, descripcion, imagen,botonEliminar}) { //  estamos obteniendo los parametros del post 
  console.log(precio);
  console.log(nombre);
  return (
    <div>
      <h1>{nombre}</h1>
      <h2>{precio}</h2>
      <p>{descripcion}</p>
      <p>{imagen}</p>
       <button onClick={botonEliminar}>Eliminar productos</button> 
    </div>
  )
}
export default Cards
import React from 'react'

 function Cards({nombre, precio, descripcion, imagen,botonEliminar, btnEliminar,btnEditar,mostrarBotones}) { //  estamos obteniendo los parametros del post 
  
  const[ iniciar,setIniciar] = useState(false)
  const modificarTexto = () =>{
    setIniciar(true)
  }

  console.log(precio);
  console.log(nombre);

  return (
    <div>
      <h1>Nombre:{nombre}</h1>
      <h2>Precio:{precio}</h2>
      <p>Descripcion:{descripcion}</p>
      <p>Imagen:{imagen}</p>
       <button onClick={botonEliminar}>Eliminar productos</button> 
       <button className='btn btn-success btn-editar' onClick={btnEditar}>EDITAR PRODUCTOS</button>
    </div>
  )
}
export default Cards
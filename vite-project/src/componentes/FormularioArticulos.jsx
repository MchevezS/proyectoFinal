import React from 'react'
import { useState } from 'react'

function FormularioArticulos() {
   const [producto, setProducto]= useState('')
   const [Descripcion, setDescripcion] = useState('')
   const [ingredientes, setIngredientes] = useState('')
   const [precio, setPrecio] = useState ('')
    const navigate = useNegative()
  return (

    <formm>
      <input type='text' placeholder='Producto' onChange={(e)=>setProducto(e.target.value)}>Añade tu Producto</input>
      <input type='Descripcion' placeholder='Descrippcion' onChange={(e)=>setDescripcion(e.target.value)}> Descripción del producto</input>
      <input type='lista' placeholder='Ingrdientes' onChange={(e)=>setIngredientes(e.target.value)}>Ingredientes </input>
      <input type='number' placeholder='precio' onChange={(e)=>setPrecio(e.target.value)}> Precio del producto</input>
      {/* para que la persona agregue la imagen tiene que utilizar un input file */}
      
    </formm> 

  )
}
export default FormularioArticulos


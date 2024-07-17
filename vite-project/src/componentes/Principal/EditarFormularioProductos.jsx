import React, { useEffect } from 'react'
import { cambiarProductos } from './MetodosProductos'
import { useState } from 'react'
const FormularioEditar = ({id,recargaPag}) => {
  const [nombre, setNombre] = useState('')
  const [precio, setPrecio] = useState('')
  const [descripcion, setDescripcion] = useState('')

  const actualizar = async () => {
    const datos = {
      nombre: nombre,
      precio: precio,
      material:material
    }
    await cambiarProductos("productos", id, datos)
    recargaPag()
  }
  return (
    <div>
    <form>
      <div>
        <label>NOMBRE</label>
        <input type='text' onChange={(e) => { setNombre(e.target.value) }} />
      </div>
      <div>
        <label>PRECIO</label>
        <input type='number' onChange={(e) => { setPrecio(e.target.value) }} />
      </div>
      <div>
        <label>DESCRIPCION</label>
        <input type='text' onChange={(e) => { setDescripcion(e.target.value) }} />
      </div>
      <button type='button' onClick={actualizar}>EDITAR</button>
    </form>
    </div>
  )
}
export default FormularioEditar
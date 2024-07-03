import {useState} from 'react'
import {FormularioPost} from './Metodos/FormularioPost'
import { useNavigate } from "react-router-dom"

function FormularioArticulos() {
   const [producto, setProducto]= useState('')
   const [descripcion, setDescripcion] = useState('')
   const [ingredientes, setIngredientes] = useState('')
   const [precio, setPrecio] = useState ('')
   const [imagen, setImegen] = useState('')
   const navigate =useNavigate()

    function guardaProducto () {
      const productos = {producto:producto, informacion:descripcion, ingredientes:ingredientes, costo:precio, imagen:imagen}
        FormularioPost('productos',productos)
           navigate('/Navbar') // aqui tengo que agregar pagina principal de todos los productos
    }
    const vacios =()=>{
      if (producto.trim()==="") {
        alert("inserta el noombre del producto")
      }
      else if (descripcion.trim()==="") {
        alert("Describe tu producto")
      }
      else if (ingredientes.trim()==="") {
        alert("ingrese los ingredientes de su producto")
      }
      else if (precio.trim()==="") {
        alert("Ingrese el costo del producto")
      }
     else if (imagen.trim()==="") {
        alert("inserte una imagen de su producto")
      }else{
        guardaProducto()
      }
    }
  return (

    <form>
        <label>Nombre del producto</label>
      <input type='text' value={producto} placeholder='Nombre del producto' onChange={(e)=>setProducto(e.target.value)}/>
      <label>Descripcion del producto</label>
      <input type='Descripcion' value={descripcion} placeholder='Descrippcion del producto' onChange={(e)=>setDescripcion(e.target.value)}/>
      <input type='lista' value={ingredientes} placeholder='Ingrdientes' onChange={(e)=>setIngredientes(e.target.value)}/>
      <input type='contador' value={precio} placeholder='Precio' onChange={(e)=>setPrecio(e.target.value)}/>
      {/* para que la persona agregue la imagen tiene que utilizar un input file */}
      <input type='file' value={imagen} placeholder='Inserta imagen' onChange={(e)=>setImegen(e.target.value)}/>
      <button onClick={vacios}>Agregar productos</button>

    </form> 

  )
}
export default FormularioArticulos


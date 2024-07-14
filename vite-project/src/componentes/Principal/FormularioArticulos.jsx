import {useState} from 'react'
import { useNavigate } from "react-router-dom"
import { FormularioPost } from '../fetchs/FormularioPost'
import { FormularioGet } from '../fetchs/FormularioGet'

function FormularioArticulos() {
   const [producto, setProducto]= useState([])   // Aca les estoy dando un estado a cada uno de estos inputs
   const [descripcion, setDescripcion] = useState('')
   const [ingredientes, setIngredientes] = useState('')
   const [precio, setPrecio] = useState ('')
   const [imagen, setImegen] = useState('')
   const navigate =useNavigate()

    function guardaProducto () { //estoy guardando los productos con esos nombres.
      const productos = {
         nombre:producto,
         informacion:descripcion,
          ingredientes:ingredientes,
           costo:precio,
            imagen:imagen}
        FormularioPost(productos)
           navigate('/Home') // aqui tengo que agregar pagina principal de todos los productos
          
    }
    const vacios =async()=>{    // estoy validando para que la person escriba y no deje ningun espacio en blanco
      if (producto.trim()==="") {
        alert("inserta el noombre del producto")
       console.log(vacios);
       return
      }
      else if (descripcion.trim()==="") {
        alert("Describe tu producto")
      }
      // else if (ingredientes.trim()==="") {
      //   alert("ingrese los ingredientes de su producto")
      // }
      else if (precio.trim()==="") {
        alert("Ingrese el costo del producto")
      }
     else if (imagen.trim()==="") {
        alert("inserte una imagen de su producto")
        
      }else{
        await FormularioPost ({
          nombre: producto,                           // no se guardan en la API
          precio:precio,
          descripcion:descripcion
        })
        vacios()
      }




  
    }
  return (

    <form className='d-flex flex-column w-25 mx-auto'>
      <label>Nombre del producto</label>
      <input type='text' value={producto} placeholder='Nombre del producto' onChange={(e)=>setProducto(e.target.value)}/>
      <label>Descripcion del producto</label>
      <input type='Descripcion' value={descripcion} placeholder='Descrippcion del producto' onChange={(e)=>setDescripcion(e.target.value)}/>
      <input type='lista' value={ingredientes} placeholder='Ingrdientes' onChange={(e)=>setIngredientes(e.target.value)}/>
      <input type='contador' value={precio} placeholder='Precio' onChange={(e)=>setPrecio(e.target.value)}/>
      {/* para que la persona agregue la imagen tiene que utilizar un input file */}
      <input type='file' value={imagen} placeholder='Inserta imagen' onChange={(e)=>setImegen(e.target.value)}/>
      <button className='btn btn-success' onClick={ guardaProducto }>Agregar productos</button>

    </form> 

  )
}
export default FormularioArticulos


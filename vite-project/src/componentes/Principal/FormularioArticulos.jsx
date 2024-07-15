import {useState} from 'react'
import { useNavigate } from "react-router-dom"
import { FormularioPost } from '../fetchs/FormularioPost'
import { FormularioGet } from '../fetchs/FormularioGet'
import Swal from 'sweetalert2'
import { mostrarAlerta } from '../../JS/SweetAlert'
import "/src/index.css"
import '/src/Estilos/FormularioProducto.css'

function FormularioArticulos() {
   const [producto, setProducto]= useState([])   // Aca les estoy dando un estado a cada uno de estos inputs
   const [descripcion, setDescripcion] = useState('')
   const [precio, setPrecio] = useState ('')
   const [imagen, setImegen] = useState('')
   const navigate =useNavigate()

    function guardaProducto () { //estoy guardando los productos con esos nombres.
      const productos = {
         nombre:producto,
         informacion:descripcion,
           costo:precio,
            imagen:imagen
          }
        FormularioPost(productos)
           navigate('/Home') // aqui tengo que agregar pagina principal de todos los productos
    }
    const Validarvacios = async()=>{    // estoy validando para que la person escriba y no deje ningun espacio en blanco
      if (producto.trim()==="" || precio.trim()==="" || descripcion.trim()==="" || imagen.trim()===""){
        mostrarAlerta("error","Llenar espacios vacios")
        alert("Completa los espacios vacios")
        return
      }else{
        await FormularioPost ({
          nombre: producto,                           // no se guardan en la API
          costo:precio,
          informacion:descripcion,
          imagen:imagen
        })
       guardaProducto()
      }




  
    }
  return (
      
    <form className='d-flex flex-column w-25 mx-auto'>
       <h1 className='tituloProducto'>Ingresa tus productos </h1>
      <input className='nombreProducto' type='text' value={producto} placeholder='Nombre del producto' onChange={(e)=>setProducto(e.target.value)}/>
      <input className='descripcion' type='Descripcion' value={descripcion} placeholder='Descrippcion del producto' onChange={(e)=>setDescripcion(e.target.value)}/>
      <input className='precio' type='contador' value={precio} placeholder='Precio' onChange={(e)=>setPrecio(e.target.value)}/>
      {/* para que la persona agregue la imagen tiene que utilizar un input file */}
      <input className='imagen' type='file' value={imagen} placeholder='Inserta imagen' onChange={(e)=>setImegen(e.target.value)}/>
      <button className='btn btn-success' onClick={Validarvacios}>Agregar productos</button>
    </form> 

  )
}
export default FormularioArticulos


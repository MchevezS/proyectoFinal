import React from 'react'
import { useNavigate } from 'react-router-dom'
import '/src/Estilos/MejorCategoria.css'


export default function MejorCategoria() {
  const navigate =useNavigate()

 
  return (
  <>
     {/* voy a poner las mejores categorías y mejores productos, luegoo voy lo que hacer es darle una functiona caada
     categoría para que me salgan mas imagenes. */}
    <div>
        <h2 className='categorias'>Mejores categorías</h2> 
    </div>
    <th> 
        <p className='cafeMoca' >Café Moca</p>
        <h4 className='cafeLinea1'>_______</h4>
        <a className='verMas1' onClick={()=>{
            navigate("/Moca")
           }}>Ver mas</a>
        <img className='mocaImagen' src='./src/Imagenes/OIP.jpg'></img>
    </th>
    <th> 
         <p className='expreso111'>Expreso Americano</p>
         <h4 className='cafeLinea2'>_______</h4>
         <a className='verMas2' onClick={()=>{
            navigate("/Expreso")
           }}>Ver mas</a>
        <img className='imagenExpreso' src='./src/Imagenes/expreso1.jpg'></img>
    </th>
    <th> 
           <p  className='capuchino1'>Capuchino</p>
           <h4  className='cafeLinea3'>_______</h4>
           <a className='verMas3' onClick={()=>{
            navigate("/Capuchino")
           }}>Ver mas</a>
           <img className='imagenCapuchino' src='./src/Imagenes/capuchino.jpg'></img>
     </th>
     <th> 
           <p  className='postre'>Postres</p>
           <h4  className='cafeLinea4'>_______</h4>
           <a className='verMas4' onClick={()=>{
            navigate("/Postres")
           }} >Ver mas</a>
           <img className='imagenPostre' src='./src/Imagenes/tresLeche.jpg'></img>
    </th>
     

    </>
  )
}

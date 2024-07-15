import React from 'react'
import '/src/Estilos/Imagenes.css'
const Moca = () => {
  return (
    <div>
      <h1 className='caf'>Café Moca Helado</h1>
     <div className='cuadroMoca'>
       <img className='imagenMoca'  src='./src/Imagenes/Mocahelado.jpg'></img> 
         <p className='precio2'>Precio: 1500 Colones</p>
    </div>
    <div className='cuadroMoca'>
      <img className='imagenMoca'  src='./src/Imagenes/Mocahelado1.jpg'></img>  
      <p className='precio2'>Precio: 1500 Colones</p>
    </div>
      <div className='cuadroMoca'>
      <img className='imagenMoca'  src='./src/Imagenes/OIP.jpg'></img>  
      <p className='precio2'>Precio: 1500 Colones</p>
    </div> 
    <div  className='cuadroMoca'>
       <img className='imagenMoca'  src='./src/Imagenes/moca helado2.jpg'></img>  
       <p className='precio2'>Precio: 1500 Colones</p>
    </div>
    <div  className='cuadroMoca'>
       <img className='imagenMoca'  src='./src/Imagenes/moca helado.jpg'></img>  
        <p className='precio2'>Precio: 1500 Colones</p>
    </div>
    </div>
  )
}

export default Moca



















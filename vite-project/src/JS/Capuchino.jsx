import React from 'react'
import '/src/Estilos/Imagenes.css'
const Capuchino = () => {
  return (
    <div >
     <h1 className='caf'>Café Capuchino</h1>
     <div className='cuadroCapuchino'>
       <img className='capuchino12' src='./src/Imagenes/capuchino de choclate.jpg'></img> 
         <p className='precio1'>Precio: 1500 Colones</p>
    </div>
     <div className='cuadroCapuchino'>
       <img className='capuchino12' src='./src/Imagenes/capuchino.jpg'></img> 
         <p className='precio1'>Precio: 1500 Colones</p>
    </div>
    <div className='cuadroCapuchino'>
       <img className='capuchino11' src='./src/Imagenes/caPuchino1.jpg'></img> 
         <p className='precio1'>Precio: 1500 Colones</p>
    </div>
    <div className='cuadroCapuchino'>
       <img className='capuchino12' src='./src/Imagenes/capuchno2.jpg'></img> 
         <p className='precio1'>Precio: 1500 Colones</p>
    </div>
    <div className='cuadroCapuchino'>
       <img className='capuchino12' src='./src/Imagenes/[capuchino Vanilla.jpg'></img> 
         <p className='precio1'>Precio: 1500 Colones</p>
    </div>
    </div>
  )
}

export default Capuchino

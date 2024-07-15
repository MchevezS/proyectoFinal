import React from 'react'
import '/src/Navbar.css'
import { useNavigate } from 'react-router-dom'

function Navbar() {
    const navigate =useNavigate()
  return (<>
   <navbar>
        {/* icono de llamaada */} 
       
       <h1 className='tituloc'>CAFETERÍA FWD-COSTA RICA</h1>
        <div className='textTele'>
      <h4 className='textLlamada'>Soporte al cliente </h4>  
      <h4 className='telefono'>255-686-4769</h4>
        </div>
      </navbar>
    
    <navbar className='navbar'>   
        <th>
        <a className='moca' onClick={()=>{
            navigate("/Moca")
           }}>Moca Helado</a>
        </th>
        <th >
        <a className='capuchino' onClick={()=>{
            navigate("/Capuchino")
           }}>Capuchino </a>
        </th>
        <th>
        <a className='expreso' onClick={()=>{
            navigate("/Expreso")
           }}>Expreso </a>
         </th>
        <th>
        <a className='postres' onClick={()=>{
            navigate("/Postres")
           }}>Postres</a>
        </th>
        </navbar>
   
    <div className='infCafe' >     {/* voy a ponerle unaa imagen de fondo */}
     <img className='imagen1' src='/src/Imagenes/Mocahelado1.jpg'></img>
     <img className='imagen2' src='/src/Imagenes/expreso.jpg'></img>
     <h2 className='cafeFrio'>Café fresco</h2>
     <h2 className='100natural'>100% Natural</h2>
     </div>
    
    </>
  )
}
export default Navbar
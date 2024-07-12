import React from 'react'
import '/src/Navbar.css'

function Navbar() {
  return (<>
   <navbar>
        {/* icono de llamaada */} 
       
       <h1 className='titulo'>CAFETERÍA FWD-COSTA RICA</h1>
      <div className='textTele'>
      <h4 className='textLlamada'>Soporte al cliente </h4>  
        <h4 className='telefono'>255-686-4769</h4>
        </div>
      </navbar>
    <navbar>
    <header className='navbar'>
        <th className='inicio'>Inicio</th>    
        <th className='moca'>Moca Helado</th>
        <th className='capuchino'>Capuchino</th>
        <th className='expreso'>Expreso</th>
        <th className='postres'>Postres</th>
        <th className='mas'>Más</th>
        <input type='text' placeholder='Buscar..'/>
        </header>
    </navbar>
    <div>
     <h2 className='cafeFrio'>Café fresco</h2>
     <h2 className='100natural'>100% Natural</h2>
     <button className='btnCompar'>Comprar ahora</button>
     </div>
    
    </>
  )
}
export default Navbar
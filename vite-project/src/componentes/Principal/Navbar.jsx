import React from 'react'


function Navbar() {
  return (<>
   <navbar>
        {/* icono de llamaada */} 
        <header>
      <h4>Soporte al cliente </h4>  
        <h4>255-686-4769</h4>
       <h1>CAFETERÍA FWD-COSTA RICA</h1>
       </header>
      </navbar>
    <navbar>
    <td>
        <th>Inicio</th>    
        <th>Moca Helado</th>
        <th>Capuchino</th>
        <th>Expreso</th>
        <th>Postres</th>
        <th>Más</th>
        <input type='text' placeholder='Buscar..'/>
    </td>
    </navbar>
    <div>
     <h2>Café fresco</h2>
     <h2>100% Natural</h2>
     <button >Comprar ahora</button>
     </div>
    
    </>
  )
}
export default Navbar
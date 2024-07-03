import React from 'react'
import MejorCategoria from './MejorCategoria'
import MejoresProductos from './MejoresProductos'
import InfoContacto from './InfoContacto'
import InfoCafeteria from './InfoCafeteria'
export default function Navbar() {

  return (<>
   <navbar>
        {/* icono */}
      <p>Soporte al cliente </p>
        <p>255-686-4769</p>
       <p>CAFETERÍA FWD-COSTA RICA</p>
      </navbar>
    <navbar>
    <ul>
        <li>Inicio</li>
        <li>Moca Helado</li>
        <li>Capuchino</li>
        <li>Expreso</li>
        <li>Postres</li>
        <li>Más</li>
        <input type='text' placeholder='Buscar..'/>
    </ul>
    </navbar>
    <div>
     <p>Café fresco</p>
     <p>100% Natural</p>
     <button >Comprar ahora</button>
     </div>
     <MejorCategoria/>
     <MejoresProductos/>
     <InfoContacto/>
     <InfoCafeteria/>

    </>
  )
}

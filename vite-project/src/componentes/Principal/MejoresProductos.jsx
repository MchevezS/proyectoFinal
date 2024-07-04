import React from 'react'

export default function MejoresProductos() {
  return (<>
    <div>  {/*aca estoy separando los productos por seccion */}
    <h2>Mejores productos</h2>
    <th>
        <h4>Destacados</h4>
    </th>
    <th>
         <h4> Más recientes</h4>
    </th>
    <th>
          <h4>Mejores vendidos</h4>
    </th>
    </div>
       <h2>Especiales</h2>
       {/* voy agregar las imganes de los productos especiales */}
    </>
  )
}

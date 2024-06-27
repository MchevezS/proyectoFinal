const Registrarse = ()=>{

    /*
        Crear estados por cada uno de los inputs
        Crear una funcion que haga el agregado de usuarios, dentro de esa se llama la funcion POST
        En cada input, hacer la funcion onChange, para mantener el contenido de los inputs actualizado, previo a mandarlo
        a la API

    */
    return(
        <>

         <h1> Registrate! </h1>
         <input placeholder="Nombre completo"/>
         <input placeholder="Correo electronico"/>
         <input placeholder="Ingrese su clave"/>
         <input placeholder="Confirme su clave"/>

         <button>Registrarse.</button>
        </>
    )
}
export default Registrarse
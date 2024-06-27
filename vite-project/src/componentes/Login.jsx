const Login = ()=>{
    return(
        <>

            <h1>Bienvenidos</h1>
            <input placeholder= "Nmbre de usuario"/>
            <input placeholder= "Password"/>
            <button onClick={Login}>Iniciar sesión</button>

             <a href="Registrarse">No tienes cuenta?</a>

            
        </>
    )
}
export default Login
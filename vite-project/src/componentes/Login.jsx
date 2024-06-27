import { useNavigate } from "react-router-dom"
const Login = ()=>{

    
    const navigate =useNavigate()
    return(
        <>

            <h1>Bienvenidos</h1>
            <input placeholder= "Nmbre de usuario"/>
            <input placeholder= "Password"/>
            <button onClick={Login}>Iniciar sesión</button>

             <a onClick={()=>{
                navigate("/Registro")
             }}>No tienes cuenta?</a>

            
        </>
    )
}
export default Login
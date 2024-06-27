import { useState } from "react"
import { MetodoPost } from "./Metodos/MetodoPost"
import { useNavigate } from "react-router-dom"

const Registrarse = ()=>{
       const [inputNombre, setInputNombre]= useState('')
       const [inputCorreo, setInputCorreo] = useState('')
       const [inputClave, setInputClave] = useState('')
       const [inputConfirmaClave, setInputConfirmaClave] = useState('')
       const navigate=useNavigate()

       function agregarUsuarios () {
        if (inputConfirmaClave === inputClave) {
            
            const usuarios = {nombre:inputNombre, correo:inputCorreo, clave:inputClave}
           MetodoPost('users',usuarios)
        }
        else{
            alert("no puedde ingresar")   /* */ 
        }

       }
    /*
        Crear estados por cada uno de los inputs "useState" ~
        Crear una funcion que haga el agregado de usuarios, dentro de esa se llama la funcion POST
        En cada input, hacer la funcion onChange, para mantener el contenido de los inputs actualizado, previo a mandarlo
        a la API 
    */
    return(
        <>

         <h1> Registrate! </h1>
         <input placeholder="Nombre completo" onChange={(e)=>setInputNombre(e.target.value)}/>
         <input placeholder="Correo electronico" onChange={(e)=>setInputCorreo(e.target.value)}/>
         <input placeholder="Ingrese su clave" onChange={(e)=>setInputClave(e.target.value)}/>
         <input placeholder="Confirme su clave" onChange={(e)=>setInputConfirmaClave(e.target.value)}/>

         <button onClick={agregarUsuarios}>Registrarse.</button>
         <a onClick={()=>{
             navigate("/")
         }}>Ya tiene una Cuena?</a>
        </>
    )
}
export default Registrarse
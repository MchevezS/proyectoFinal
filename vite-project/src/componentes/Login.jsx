import {useState} from "react"
import { useNavigate } from "react-router-dom"
import Registrarse from "./Registrarse"
import { MetodoPost } from "./Metodos/MetodoPost"
import MetodoGet from "./Metodos/MetodoGet"

const Login = ()=>{
    // cree estados para cada uno de los inputs
    const [usuario, setUsuario] = useState('')
    const [password, setPasssword] = useState('')
    const [listaUsuarios,setListaUsuarios]=useState([])


    /*
        El useEffect ejecuta una funcion APENAS carga la pag, y cuando su arreglo de dependencias cambia
        []
    /*

    /*
        Debe usar un useEffect, para traer la informacion de los usuarios y validar esta con la que esta escrita en los inputs

        RECOMENDACIONES:
        usar el .find por  ejemplo listaUsuarios.find

        RECORDATORIO:
        El find de los arreglos, le va a devolver VERDADERO si encuentra el dato que está entre los parentesis
    */

    const navigate =useNavigate()

    /* Hice una funcion para el agregado de los usuarios, dentro de esta funcion llame al metodo post*/

    // function AgregarUsuario() {                          Al parecer noo me funciona
    //     const datosUsuarios = { nombre:usuario, clave:password}
    //     console.log("estoy dentro");
    // }
    

      //   validaciones para los inputs/ las alertas las tengo que cambiar
      function validaInputs() {
        if (usuario.trim()==="") {
            alert("Su usuario no se encuentra registrado")
        }
        if (password.trim()=== "") {
            alert("clave incorrecta")
            console.log(validaInputs);
        }else{
            // MetodoPost()
            // // AgregarUsuario(Registrarse)
        }
        
      }
    return(
        <>
            <h1>Bienvenidos</h1>

            <input type="usuario" placeholder= "Nmbre de usuario" onChange={(e)=>setUsuario(e.target.value)}/>
            <input type="Password " placeholder= "Password" onChange={(e)=>setPasssword(e.target.value)}/>
            <button onClick={validaInputs}>Iniciar sesión</button>

             <a onClick={()=>{
                navigate("/Registro")
             }}>No tienes cuenta?</a>

            
        </>
    )
}
export default Login
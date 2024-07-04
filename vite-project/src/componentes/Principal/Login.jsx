// proyectoFinal\vite-project\src
import {useState, useEffect} from "react"
import {useNavigate} from "react-router-dom"
import MetodoGet from "../Metodos/MetodoGet"
const Login = ()=>{
    // cree estados para cada uno de los inputs
    const [usuario, setUsuario] = useState('')
    const [password, setPasssword] = useState('')
    const [listaUsuarios,setListaUsuarios]=useState([])
    const navigate =useNavigate()

      useEffect(()=>{
        const usuariosRegistro = async()=>{
            let preListaUsuarios = await MetodoGet('users');
            setListaUsuarios(preListaUsuarios) 
        }
        usuariosRegistro()
        console.log(listaUsuarios);
      },[])


    function validar() {
          
        let validarInicio = listaUsuarios.find((user)=> usuario === user.nombre && password ===user.clave)

      console.log(usuario);
      
        if (validarInicio) {
            console.log(validarInicio);
            validaInputs()
            navigate("/Productos") // despues voy a poner para que me tire a la pagina principal.
            alert('entra pag')
        }else{
            alert('incorrecto')
        }

    }

      //   validaciones para los inputs/ las alertas las tengo que cambiar
      function validaInputs() {
        if (usuario.trim()==="") {
            alert("Por favor llene los campos ")
        }
        if (password.trim()=== "") {
            alert("Por favor llene los campos")
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
            <input type="password" placeholder= "Password" onChange={(e)=>setPasssword(e.target.value)}/>
            <button onClick={validar}>Iniciar sesión</button>

             <a onClick={()=>{
                navigate("/Registro")
             }}>No tienes cuenta?</a>

            
        </>
    )
}

export default Login
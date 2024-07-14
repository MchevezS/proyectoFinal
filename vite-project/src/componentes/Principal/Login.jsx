// proyectoFinal\vite-project\src
import {useState, useEffect} from "react"
import {useNavigate} from "react-router-dom"
import MetodoGet from "../fetchs/MetodoGet" //....
import '/src/Estilos/LoginStyles.css'
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
          <div className="cuadrito">
            <h1 className="titulo">Bienvenidos!</h1>
            <input  className="inpUsuario" type="usuario" placeholder= "Nmbre de usuario" onChange={(e)=>setUsuario(e.target.value)}/> <br></br>
            <input  className="inpPass" type="password" placeholder= "Password" onChange={(e)=>setPasssword(e.target.value)}/> <br></br>
            <button className="btnIncio" onClick={validar}>Iniciar sesión</button>
             <a className="noCuenta" onClick={()=>{
                navigate("/Registro")
             }}>No tienes cuenta?</a>
             <br></br>
             <br></br>
         </div>
            
        </>
    )
}

export default Login
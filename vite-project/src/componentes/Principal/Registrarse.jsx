import React from 'react'
import {useState} from "react"
import {useNavigate} from "react-router-dom"
import { MetodoPost } from '../fetchs/MetodoPost' // ..,
import '/src/Estilos/RegistrarseStyles.css'


const Registrarse = ()=>{
    // cree estados para cada uno de los inputs
       const [inputNombre, setInputNombre]= useState('')
       const [inputCorreo, setInputCorreo] = useState('')
       const [inputClave, setInputClave] = useState('')
       const [inputConfirmaClave, setInputConfirmaClave] = useState('')
       const navigate=useNavigate()
         
       /* Hice una funcion para el agregado de los usuarios, dentro de esta funcion llame al metodo post*/
       function agregarUsuarios () {
        
            const usuarios = {nombre:inputNombre, correo:inputCorreo, clave:inputClave}
           MetodoPost('users',usuarios)
            navigate("/Inicio")
        

       }
        //   validaciones para los inputs/ las alertas las tengo que cambiar
        const validacionesInput =()=>{
            if (inputNombre.trim()== "") {
                alert("nombre vacio")
            }
            else if(inputCorreo.trim()==="" ) {
                alert("ingrese su correo")
            }
            else if (inputClave.trim()=== "") {
                alert("ingrese su clave")
            } 
            else if (inputConfirmaClave.trim()=== "") {
                alert("ingrese su clave para confimar ")
            }
                // valide que las claves tienen que ser igual
            else if (!(inputConfirmaClave === inputClave)) {
                alert("Su clave no coincide")
            }else{
                agregarUsuarios()
            }
        }
        
    return(
        <>
       <div className='contenedorCuadro'>
         <h1 className='tituloR'> Registrate! </h1> <br/>
         {/* En cada input hice la funcion del onChange, para mantener el contenido de los inputs actualizados, y eso hace que me los mande al API  */}
         <input className='inputNombre' type="text" value={inputNombre} placeholder="Nombre completo" onChange={(e)=>setInputNombre(e.target.value)}/> <br/>
         <input className='inputCorreo' type="email" value={inputCorreo} placeholder="Correo electronico" onChange={(e)=>setInputCorreo(e.target.value)}/> <br/>
         <input className='inputClave' type="password" value={inputClave} placeholder="Ingrese su clave" onChange={(e)=>setInputClave(e.target.value)}/> <br/>
         <input className='inputConfirmaClave' type="password" value={inputConfirmaClave} placeholder="Confirme su clave" onChange={(e)=>setInputConfirmaClave(e.target.value)}/> <br/>
         <button className='btnRegistarse' onClick={validacionesInput}>Registrarse.</button>
         <a className='tieneCuenta' onClick={()=>{
             navigate("/")
         }}>Ya tiene una Cuena?</a>
       </div>

        </>
    )
}
export default Registrarse
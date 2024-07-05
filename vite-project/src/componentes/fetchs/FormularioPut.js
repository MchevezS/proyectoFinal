async function FormularioPut(endpoint, id) {
    try {
        const response = await fetch( `http://localhost:3001/${endpoint}/${id}`,{
            method: "PUT",
            headers:{
                 "Content-type": "application/json; charset=UTF-8"
            },
            body:JSON.stringify()
        })
        const datosP = await response.json()
        console.log(datosP);
        return datos 
    } catch (error) {
        console.error(error);
    }
}
export {FormularioPut}
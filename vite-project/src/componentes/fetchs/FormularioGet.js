
async function FormularioGet() {
    try {
        const response = await fetch(" http://localhost:3001/productos",{
            method: "GET",
            headers:{
                 "Content-type": "application/json; charset=UTF-8"
            },
            body:JSON.stringify()
        })
        const datos = await response.json()
        console.log(datos);
        return datos 
    } catch (error) {
        console.error(error);
    }
}
export {FormularioGet}
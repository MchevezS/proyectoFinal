
async function FormularioPost(obj) {
    try {
        const response = await fetch(" http://localhost:3001/productos",{
            method: "POST",
            headers:{
                 "Content-type": "application/json; charset=UTF-8"
            },
            body:JSON.stringify(obj)
        })
        const datos = await response.json()
        console.log(datos);
    } catch (error) {
        console.error(error);
    }
}
export {FormularioPost}
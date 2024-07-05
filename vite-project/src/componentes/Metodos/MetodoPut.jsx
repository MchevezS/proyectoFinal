async function MetodoPut(id) {
    try {
        const response = await fetch ("http://localhost:3001",{
            method: "PUT",
            headers:{
                 "Content-type": "application/json; charset=UTF-8"
            },
            body:JSON.stringify(id)
        })
        const datos = await response.json()
        console.log(datos);
        return datos        
    } catch (error) {
        console.error(error);
        
    }
}
export {MetodoPut}
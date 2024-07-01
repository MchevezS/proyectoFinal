async function MetodoGet(endpoint) {
    try {
        const response = await fetch ("http://localhost:3001/"+endpoint,{
            method: "GET",
            headers:{
                 "Content-type": "application/json; charset=UTF-8"
            },
        })
        const datos = await response.json()
        console.log(datos);
        return datos        
    } catch (error) {
        console.error(error);
        
    }
    
}
export default MetodoGet
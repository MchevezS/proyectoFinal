async function MetodoGet() {
    try {
        const response = await fetch ("http://localhost:3001")
        const datos = await response.json()
        console.log(datos);
        return datos        
    } catch (error) {
        console.error(error);
        
    }
}
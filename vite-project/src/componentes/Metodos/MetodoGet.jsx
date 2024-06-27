async function MetodoGet() {
    try {
        const response = await fetch ("http://localhost:3001")
        const daDatos = await response.json()

        console.log(daDatos);
        
    } catch (error) {
        console.error(error);
        
    }
}
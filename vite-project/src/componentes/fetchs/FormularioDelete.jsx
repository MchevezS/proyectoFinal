async function FormularioDelete(id) {
    try {
        const response = await fetch( `http://localhost:3001/productos/${id}`,{
            method: "PUT",
            headers:{
                 "Content-type": "application/json; charset=UTF-8"
            },
        })
    } catch (error) {
        console.error(error);
    }
}
export {FormularioDelete}
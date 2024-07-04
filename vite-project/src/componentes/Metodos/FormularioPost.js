
async function FormularioPost(obj) {
    try {
        const response = await fetch(" http://localhost:3001",{
            method: "POST",
            headers:{
                 "Content-type": "application/json; charset=UTF-8"
            },
            body:JSON.stringify(obj)
        })
    } catch (error) {
        console.error(error);
    }
}
export {FormularioPost}
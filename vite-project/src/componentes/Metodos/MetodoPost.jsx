


async function MetodoPost() {
    try {
        const guardarDatos = {
         id:Date.now(),
         nombre: input.value,
         estado: false
        }
        const response = await fetch(" http://localhost:3001",{
            method: "POST",
            headers:{
                 "Content-type": "application/json; charset=UTF-8"
            },
            body:JSON.stringify(guardarDatos)
        })
        console.log(`La tarea ${tarea.id} fue agregada`);
    
    } catch (error) {
        console.error(error);
    }
}
export {MetodoPost}
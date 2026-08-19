// Estructura para conectar con APIs

async function getUsers(){
    const res = await fetch ("https://dummyjson.com/users");
    const data = await res.jason()
    console.log(data.users)
}
getUsers
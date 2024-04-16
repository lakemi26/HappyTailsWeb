export async function get(id:string){
    
    const options = {
        method : "get",
        headers:{"Content-Type":"application/json"}
    }

    const response = await fetch(process.env.BASE_URL + `/tutor/${id}`, options)
    const seila = await response.json()
    console.log(id)
    return seila
    
}
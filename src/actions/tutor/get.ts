export async function get(id:string){
    
    const options = {
        method : "get",
        headers:{"Content-Type":"application/json"}
    }

    const response = await fetch(process.env.BASE_URL + `/tutor/${id}`, options)
    return await response.json()
    
    
}
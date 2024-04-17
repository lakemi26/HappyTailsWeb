"use server"

import { redirect } from "next/navigation"

interface Info{
    cpf : string
}

export async function update(infoUpdated:Info,id:string){

    const data = {cpf:infoUpdated.cpf}

    const options = {
        method : "put",
        body:JSON.stringify(data),
        headers:{"Content-Type":"application/json"}
    }

    const response = await fetch(process.env.BASE_URL + `/tutor/${id}`, options)

    if(response.ok){
        const {id} = await response.json()
        redirect(`/tutor/${id}`)
    }
    if(!response.ok){
        const info = await response.json()
        console.log(info)
        
    }
}
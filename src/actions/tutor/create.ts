"use server"

import { redirect } from "next/navigation"


export async function cadastrar(prevState:any , formData:FormData){

    const data = {nomeCompleto:formData.get("nomeCompleto"),
                  cpf:formData.get("cpf")
    }

    const options = {
        method : "post",
        body:JSON.stringify(data),
        headers:{"Content-Type":"application/json"}
    }

    const response = await fetch(process.env.BASE_URL + "/tutor", options)

    if(response.ok){
        const {id} = await response.json()
        redirect(`/tutor/${id}`)
    }
    if(!response.ok){
        const info = await response.json()
        console.log(info)
        return{
            mensagem: "Algo está errado!"
        }
    }
}
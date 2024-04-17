"use server"
import { redirect } from "next/navigation";

export async function deletar(id:string){
    

    const options = {
        method : "delete",
        headers:{"Content-Type":"application/json"}
    }

    const response = await fetch(process.env.BASE_URL + `/tutor/${id}`, options)

    
    if (response.ok) {
       redirect("/")
    }

    
}
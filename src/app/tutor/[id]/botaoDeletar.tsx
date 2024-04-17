"use client"

import { deletar } from "@/actions/tutor/delete"

export function BotaoDeletar({id}:{id:string}){
    return(
        <button onClick={()=>{deletar(id)}} >Deletar Conta</button>
        
    )
}

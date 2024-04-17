"use client"

import { update } from "@/actions/tutor/update"
import Link from "next/link"
import { useState } from "react"

export default function editar({params}:{params:{id:string}}){
    const [cpf,setCpf] = useState("")
    console.log(params)
    return (
        <div>
        <label htmlFor="cpf">Mude seu cpf</label>
        <input className="text-black" id="cpf" type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} />
        <button onClick={()=>update({cpf},params.id)}>Enviar</button>
        <Link href= {`/tutor/${params.id}`}>Voltar</Link>
        </div>
    )
}
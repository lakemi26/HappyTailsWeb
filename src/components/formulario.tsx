"use client"

import { cadastrar } from "@/actions/tutor/create"
import { useFormState } from "react-dom"

const initialState = {mensagem: ""}

export default function Form(){
    const[state,formAction] = useFormState(cadastrar,initialState)
    return(
        <form className="flex flex-col w-80" action= {formAction}>

            <label htmlFor="nome">Nome Completo</label>
            <input className="text-black" type="text" name="nomeCompleto" id="nome" />
            
            <label htmlFor="cpf">CPF</label>
            <input className="text-black" type="text" name="cpf" id="cpf"/>
            
            <button type="submit">Enviar</button>
        </form>
    )
    

}
import { get } from "@/actions/tutor/get"
import { BotaoDeletar } from "./botaoDeletar"

interface ITutor{
    nomeCompleto:string,
    cpf:string
}

export default async function Tutor ({ params }: { params: { id: string } }){
    const detalhesTutor = await get(params.id)

    return(
        <div>
            <h2>Nome Completo: {detalhesTutor?.nomeCompleto}</h2>
            <h2>CPF: {detalhesTutor?.cpf}</h2>

            <BotaoDeletar id={params.id}/>
        </div>
    )

}
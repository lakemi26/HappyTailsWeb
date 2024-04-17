import { get } from "@/actions/tutor/get"
import { BotaoDeletar } from "./botaoDeletar"
import Link from "next/link"

//desabilita o cache da página
export const dynamic = "force-dynamic"

export default async function Tutor ({ params }: { params: { id: string } }){
    const detalhesTutor = await get(params.id)

    return(
        <div>
            <h2>Nome Completo: {detalhesTutor?.nomeCompleto}</h2>
            <h2>CPF: {detalhesTutor?.cpf}</h2>
            <Link href= {`/tutor/${params.id}/edit`}>Editar</Link>
            <BotaoDeletar id={params.id}/>
        </div>
    )

}
'use client'
import Image from "next/image"
import Patinha from './patinha.svg'

interface TituloProps{
    titulo: string;
}


export default function Titulo(props: TituloProps){
    return(
        <div className="flex gap-3">
             <Image 
                src={Patinha}
                alt="icone patinha"
                width={32}
                height={32}
            ></Image>
             <p className="text-3xl flex gap-2">{props.titulo}
            
            </p>
        </div>
    )
}
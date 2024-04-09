'use client'
import Image, { StaticImageData } from "next/image"
import BannerGatinho from './BannerGatinho.png'

interface CardProps{
    imagem?: string | StaticImageData,
    data: string,
    endereco:string,
    hora:string
}

export default function CardEvento ({data,endereco,hora,imagem =BannerGatinho}:CardProps){
    
    //const imgSrc = !!image ? image : "BannerGatinho.png"

    return(
    <div className="mt-8">
        <div><Image className="rounded-2xl"
                src={imagem}
                alt="imagem parque"
                width={200}
                height={200}
            ></Image>
        </div>
            <p className="text-blue-400 mt-2">{data}</p>
            <p>{endereco}</p>
            <p className="text-blue-400 mt-1">{hora}</p>
    </div>
    )
}
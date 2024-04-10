'use client'
import Image, { StaticImageData } from "next/image"
import BannerGatinho from './BannerGatinho.png'

interface CardProps{
    imagem?: string | StaticImageData,
    nome: string,
    idade:string,
    castracao:string
}

export default function CardDestaque ({nome,idade,castracao,imagem =BannerGatinho}:CardProps){
    
    //const imgSrc = !!image ? image : "BannerGatinho.png"

    return(
    <div className="mt-8 flex flex-col justify-center">
        <div className="flex justify-center"><Image className="rounded-full shadow-md shadow-blue-400 w-40 h-40"
                src={imagem}
                alt="imagem parque"
                width={200}
                height={200}
            ></Image>
        </div>
            <p className="flex justify-center mt-4 text-2xl">{nome}</p>
            <p className="flex justify-center">{idade}</p>
            <p className="flex justify-center">{castracao}</p>
    </div>
    )
}
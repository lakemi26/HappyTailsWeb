'use client'
import Image, { StaticImageData } from "next/image"
import BannerGatinho from './BannerGatinho.png'

interface CardProps{
    imagem?: string | StaticImageData,
    nome: string,
    historia: string,
}

export default function CardHistoria ({nome,historia,imagem =BannerGatinho}:CardProps){
    
    //const imgSrc = !!image ? image : "BannerGatinho.png"

    return(
    <div className="mt-8 flex flex-row w-2/4 justify-center border border-blue-500 mr-3 p-3">
        <div className="flex justify-center mr-3"><Image className="rounded-full"
                src={imagem}
                alt="imagem parque"
                width={200}
                height={200}
            ></Image>
        </div>
        <div className="w-full">
            <p className="text-2xl mb-2">{nome}</p>
            <p>{historia}</p>
        </div>
    </div>
    )
}
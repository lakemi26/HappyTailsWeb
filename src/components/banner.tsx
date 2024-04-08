'use client'
import Image from "next/image"
import BannerGatinho from './BannerGatinho.png'
import Patinha from './patinha.svg'


export default function Banner(){
    return(
        <div className="w-9/12 m-auto relative">
            <Image
                src={BannerGatinho}
                alt="Banner Gatinho"
                width={1440}
                height={774}
            ></Image>
            <p className="text-3xl flex absolute top-20 right-16 gap-2">Encontre amor em cada patinha
            <Image 
                src={Patinha}
                alt="icone patinha"
                width={32}
                height={32}
            ></Image>
            </p>
        </div>
    )
}

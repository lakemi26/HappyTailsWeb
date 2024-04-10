import CardDestaque from "./cardDestaque";
import Titulo from "./titulo";
import pet1 from "./pet1.jpg";
import pet2 from "./pet2.jpg";
import pet3 from "./pet3.jpg";
import pet4 from "./pet4.jpg";
import pet5 from "./pet5.jpg";


export default function SectionDestaque(){
    return(
        <div className="m-auto w-9/12 mt-5">
            <Titulo
            titulo="Pets em destaque"
            />
            <div className="flex justify-around">
            <CardDestaque
            imagem={pet1}
            nome="Appa ♂"
            idade="1 ano"
            castracao="Castrado"
            />

            <CardDestaque
            imagem={pet2}
            nome="Lana ♀"
            idade="4 meses"
            castracao="Não castrado" 
            />

            <CardDestaque
            imagem={pet3}
            nome="Samuel ♂"
            idade="1 ano"
            castracao="Castrado"  
            />

            <CardDestaque
            imagem={pet4}
            nome="Theodor ♂"
            idade="5 anos"
            castracao="Castrado"            
            />

            <CardDestaque
            imagem={pet5}
            nome="Luna ♀"
            idade="3 anos"
            castracao="Castrado"           
            />
            </div>
        </div>
    )
}
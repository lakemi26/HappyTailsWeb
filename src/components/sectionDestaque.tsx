import CardDestaque from "./cardDestaque";
import Titulo from "./titulo";


export default function SectionDestaque(){
    return(
        <div className="m-auto w-9/12 mt-5">
            <Titulo
            titulo="Pets em destaque"
            />
            <div className="flex justify-around">
            <CardDestaque
            nome="Appa ♂"
            idade="1 ano"
            castracao="Castrado"
            
            />

            <CardDestaque
            nome="Appa ♂"
            idade="1 ano"
            castracao="Castrado"
            
            />

            <CardDestaque
            nome="Appa ♂"
            idade="1 ano"
            castracao="Castrado"
            
            />

            <CardDestaque
            nome="Appa ♂"
            idade="1 ano"
            castracao="Castrado"
            
            />

            <CardDestaque
            nome="Appa ♂"
            idade="1 ano"
            castracao="Castrado"
            
            />
            </div>
        </div>
    )
}
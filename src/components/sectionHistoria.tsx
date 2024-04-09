import CardHistoria from "./cardHistoria";
import Titulo from "./titulo";

export default function SectionHistoria(){
    return(
        <div className="m-auto w-9/12 mt-5">
            <Titulo
            titulo="Histórias de sucesso"
            />
            <div className="flex flex-row">
                <CardHistoria
                nome="Alana e Max"
                historia="Desde o primeiro olhar no abrigo, soube que Max seria mais que um simples cachorro. Adotá-lo foi a melhor decisão. Nos primeiros dias, ele era tímido, mas com paciência, Max se tornou um amigo leal. Juntos, enfrentamos desafios e celebramos alegrias. Max não apenas preencheu meu coração, mas trouxe uma luz especial à minha vida."
                />
                <CardHistoria
                nome="Alana e Max"
                historia="Desde o primeiro olhar no abrigo, soube que Max seria mais que um simples cachorro. Adotá-lo foi a melhor decisão. Nos primeiros dias, ele era tímido, mas com paciência, Max se tornou um amigo leal. Juntos, enfrentamos desafios e celebramos alegrias. Max não apenas preencheu meu coração, mas trouxe uma luz especial à minha vida."
                />
            </div>
            
        </div>
    )
}
import CardHistoria from "./cardHistoria";
import Titulo from "./titulo";
import hist1 from "./hist1.jpg";
import hist2 from "./hist2.jpg"

export default function SectionHistoria(){
    return(
        <div className="m-auto w-9/12 mt-5">
            <Titulo
            titulo="Histórias de sucesso"
            />
            <div className="flex flex-row">
                <CardHistoria
                imagem={hist1}
                nome="Alana e Max"
                historia="Desde o primeiro olhar no abrigo, soube que Max seria mais que um simples cachorro. Adotá-lo foi a melhor decisão. Nos primeiros dias, ele era tímido, mas com paciência, Max se tornou um amigo leal. Juntos, enfrentamos desafios e celebramos alegrias. Max não apenas preencheu meu coração, mas trouxe uma luz especial à minha vida."
                />
                
                <CardHistoria
                imagem={hist2}
                nome="Suzana e Bartô"
                historia="Desde o momento em que pus meus olhos no abrigo, soube que aquele cachorro seria mais do que apenas um animal de estimação. Adotar o Bartô foi a melhor decisão que tomei. Nos primeiros dias, ele estava tímido e desconfiado, mas com paciência e carinho, ele começou a se abrir para mim."
                />
            </div>
            
        </div>
    )
}
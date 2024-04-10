import CardEvento from "./cardEvento";
import Titulo from "./titulo";
import parque1 from "./parque1.jpg";
import parque2 from "./parque2.jpg";
import parque3 from "./parque3.jpg";
import parque4 from "./parque4.jpg";
import parque5 from "./parque5.jpg";

export default function SectionEvento(){
    return(
    <div className="m-auto w-9/12 mt-5">
        <Titulo
        titulo="Próximos eventos"
        />
        <div className="flex justify-around">
            <CardEvento 
            imagem={parque1}
            data="21/10/2023"
            endereco="Rua Santa Eulália, 86"
            hora="10h | 18h"
            />
            <CardEvento 
            imagem={parque2}
            data="21/10/2023"
            endereco="Praça Benedito Calixto "
            hora="10h | 18h"
            />

            <CardEvento 
            imagem={parque3}
            data="21/10/2023"
            endereco="Rua General Jardim, 234"
            hora="10h | 18h"
            />

            <CardEvento 
            imagem={parque4}
            data="21/10/2023"
            endereco="Praça Benedito Calixto"
            hora="10h | 18h"
            />

            <CardEvento 
            imagem={parque5}
            data="21/10/2023"
            endereco="Rua Santa Eulália, 86"
            hora="10h | 18h"
            />
        </div>
    </div>
    )
}
import CardEvento from "./cardEvento";
import Titulo from "./titulo";

export default function SectionEvento(){
    return(
    <div className="m-auto w-9/12 mt-5">
        <Titulo
        titulo="Próximos eventos"
        />
        <div className="flex justify-around">
            <CardEvento 
            
            data="21/10/2023"
            endereco="Liberdade"
            hora="20:00"
            />
            <CardEvento 
        
            data="21/10/2023"
            endereco="Liberdade"
            hora="20:00"
            />

            <CardEvento 
            
            data="21/10/2023"
            endereco="Liberdade"
            hora="20:00"
            />

            <CardEvento 
            
            data="21/10/2023"
            endereco="Liberdade"
            hora="20:00"
            />

            <CardEvento 
            
            data="21/10/2023"
            endereco="Liberdade"
            hora="20:00"
            />
        </div>
    </div>
    )
}
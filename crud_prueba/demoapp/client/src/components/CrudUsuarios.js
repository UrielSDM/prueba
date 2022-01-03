
import Formulario from "./Formulario"
import axios from 'axios';

export default function CrudUsuarios()
{
    const crearUsuario = (e,form) => 
    {
        console.log(form);

        let url = "/crearUsuario";

        let parameters = { name:form.name };

        axios.post(url,parameters).then( 
            (response) => {
                
            }
         )
    }
    
    return(
        <>
         <div>
             FormularioNuevo
             <Formulario crearUsuario={crearUsuario} />
         </div>
        </>
    );
}
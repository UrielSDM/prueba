import React, {useState} from "react";

export default function Formulario(props)
{
    const crearUsuario = props.crearUsuario;

    const [form,setForm] = useState([{}]);

    const handleOnChange = (e) => {

        setForm(
            {
                ...form,
                [e.target.name]:e.target.value
            }
        )

    }

    return(
        <>
         <div>
             <input type="text" name="name" onChange={handleOnChange} ></input> 
             <button onClick={ (e) => crearUsuario(e,form)} > Enviar </button>
         </div>
        </>
    );
}
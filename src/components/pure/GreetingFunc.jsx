import { useState } from "react";

/*=========== 
COMPONENTE FUNCION
==============*/

const GreetingFunc = (props) =>{

    //useSate
    const [edad, setEdad] = useState(18);

    const cumpleanios = () => {
        setEdad(edad +1);
    }

    return(
        <div>
            <h1>Soy un componente Función, mi nombre es {props.nombre}</h1>
            <h2>Mi edad es {edad}</h2>
            <div>
                <button onClick={cumpleanios}>Aumentar edad</button>
            </div>
        </div>
    );
};


export default GreetingFunc;
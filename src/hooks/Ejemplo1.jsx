//Ejemplo para uso del hook useState

import { useState } from "react"

const Ejemplo1 = () => {

    //valor inicial para un contador
    const valorInicial = 0;

    //valor inicial para una persona
    const personaInicial = {
        nombre: 'Juan',
        email: 'juanmvg2003@gmail.com'
    }

    //queremos que el valor inicial y persona inicial sean parte del estado del componente, para así gestionar su cambio y que este se vea reflejado en la vista del componente.

    //const [nombreVariable, funcionParaCambiar] = useState(valorInicial);

    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    //función para actualizar el estado priivado qeu tiene el contador
    const incrementarContador = () => {
        //funcion para cambiar el estado inicial
        setContador(contador + 1);
    }

    //función para actualizar el estado de persona, va acambiar el dato de la persona
    const actualizarPersona =  () => {
        setPersona({
            nombre: 'Pepe',
            email: 'email@gmail.com'
        });
    }

    return(
        <div>
            <h1>Ejemplo1 useState()</h1>
            <h2> contador: {contador}</h2>
            <h2>Persona:</h2>
            <h3>Nombre: {persona.nombre}</h3>
            <h4>E-mail: {persona.email}</h4>

            <div>
                <button onClick={incrementarContador}>Incrementar contador</button>
                <button onClick={actualizarPersona}>Actualizar Persona</button>
            </div>
        </div>
    )

}


export default Ejemplo1;
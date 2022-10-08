//ejemplo de uso de useEffect, useEffect

import { useEffect, useRef, useState } from "react";

const Ejemplo2 = () => {

    //vamos a crear dos contadores distintos, cada uno en un estado diferente
    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    //vamos a crear una referencia con useRef() para asociar una variable con un elemento del DOM
    const miRef = useRef();

    const incrementar1 = () => {
        setContador1(contador1 + 1)
    }

    const incrementar2 = () => {
        setContador2(contador2 + 1)
    }


    //Trabajando con useEffect, cada vez que haya un cambio en el estado del componente se ejecuta lo que esté dentro del useEffect
    /*
    useEffect(() => {
         console.log('cambio en el estado del componente');
         console.log('mostrando referencia a elemento del DOM');
         console.log(miRef);
    })
    */

    //trabajar con useEffect, solo cuando cambie contador 1, cada vez que cambie el contador 1 se modifica useEffect.
    //solo va a aparecer el código que está dentro del useEffect cuando haya un cambio en el array que está como segundo parametro.
    useEffect(() => {
        console.log('cambio en el estado del contador1 / contador2');
        console.log('mostrando referencia a elemento del DOM');
        console.log(miRef);

    }, [contador1])

    return(
        <div>
            <h1>Ejemplo useState, useEffect, useRef</h1>
            <h2>Contador1: {contador1}</h2>
            <h2>Contador2: {contador2}</h2>

            {/* Eleemnto refenciado */}
            <h4 ref={miRef}>Ejemplo de elemento referenciado.</h4>

            {/* para cambiar los contadores */}
            <div>
                <button onClick={incrementar1}>Incrementar contador1</button>
                <button onClick={incrementar2}>Incrementar contador2</button>
            </div>
        </div>
    )

}


export default Ejemplo2;
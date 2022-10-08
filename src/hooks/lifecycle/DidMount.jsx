//Ejemplo de uso de ciclo de vida del método de ciclo de vida en componente clase y en componente funcional.

//Ejmplo tipo clase

import React, { Component, useEffect } from 'react';

export class DidMount extends Component {

    componentDidMount(){
        console.log('Comportamiento antes de que el componente sea añadido O RENDERIXADO al DOM')
    }

    render() {
        return (
            <div>
                <h1>DidMount</h1>
            </div>
        );
    }
}



//ciclo de vida funcional

const DidMountHook = () => {
 
    useEffect(() => {
        console.log('Comportamiento antes de que el componente sea añadido O RENDERIXADO al DOM');
    }, [])

    return (
        <div>
            <h1>DidMount Funcional Hook</h1>
        </div>
    );
}

export default DidMount;

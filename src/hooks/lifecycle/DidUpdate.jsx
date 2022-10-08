//Ejemplo de uso de metodo component DisUpdate en clase u uso de hook en componente funcioanl

import React, { Component, useEffect } from 'react';

//ejemplo clase
export class DidUpdate extends Component {

    componentDidUpdate(){
        console.log('Comportamiento cuando el componente recive nuevos props o cambio en su estado privado')
    }

    render() {
        return (
            <div>
                <h1>DidUpdate</h1>
            </div>
        );
    }
}


//ejemplo funcion

export const DidUpdateHook = () => {

    useEffect(() => {
        console.log('Comportamiento cuando el componente recive nuevos props o cambio en su estado privado');
    });

    return (
        <div>
            <h1>DidUpdate como Hook funcinal</h1>
        </div>
    );
}


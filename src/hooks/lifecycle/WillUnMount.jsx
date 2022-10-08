//ejemplo del metodo componente willunmount cuando el componente va a desaparecer en clsae y hook en use effect
//uando el componente va adesaparecer

import React, { Component, useEffect } from 'react';

export class WillUnMount extends Component {

    componentWillUnmount(){
        console.log('Comportamiento antes de que el componente desaparezca');
    }

    render() {
        return (
            <div>
                <h1>Will Un Mount</h1>
            </div>
        );
    }
}


import React from 'react';

const WillUnMountHook = () => {

    useEffect(() => {
        
        return () => {
        console.log('Comportamiento antes de que el componente desaparezca');
        };

    }, []);

    return (
        <div>
            <h1>Will Un Mount Funtion</h1>
        </div>
    );
}

export default WillUnMount;

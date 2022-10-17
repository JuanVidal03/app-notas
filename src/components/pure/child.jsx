import React, { useRef } from 'react';

const Child = ( { name, send, actualizar } ) => {

    const mensajeReferencia = useRef('');
    const nombreForm = useRef('');

    const pressButton = () => {
        const text = mensajeReferencia.current.value;
        alert(`Default , ${text}`);
    }

    const pressButtonParams = ( text ) => {
        alert(`Text: ${ text }`);
    }

    const enviarForm = (e) => {
        e.preventDefault();

        actualizar(nombreForm.current.value);
    }

    return (
        <div style={ { backgroundColor: 'cyan', padding: '30px' } }>
            <p onMouseOver={ () => console.log('On mouse over') }>Hola, {name}</p>
            <button onClick={() => console.log('Botón 1 pulsado')}>Botón 1</button>
            <button onClick={ pressButton }>Botón 2</button>
            <button onClick={ () => pressButtonParams('hola') }>Botón 3</button>
            <input 
            placeholder='Enia un texto al padre' 
            onFocus={ () => console.log('input enfocado') }
            onChange={ (e) => console.log('Input cambiado:', e.target.value) } 
            onCopy={() => console.log('Texto copiado del input')}
            ref={mensajeReferencia}/>
            <button onClick={ () => send(mensajeReferencia.current.value)}>Enviar mensaje</button>

            <div style={ { marginTop: '50px' } }>
                <form onSubmit={ enviarForm }>
                    <input
                    placeholder='Nombre'
                    ref={nombreForm}/>
                    <button type='submit'>Actualizar Nombre</button>
                </form>
            </div>
        </div>
    );
}

export default Child;

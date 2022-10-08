import React, { useState } from 'react';

//definiendo estilos en constantes
//si el usuario está logueado
const loggedStyle = {
    color: 'white'
};


//estilo usuario no logeado
const unloggedStyle = {
    color: 'tomato',
    fontWeight: 'bold'
}

const GreetingStyled = (props) => {
    
    //generamos un estado para controlar si el usuario está o no logeado
    const [logged, setLogged] = useState(false);

    return (
        <div style={ logged ? loggedStyle : unloggedStyle }>
            { logged ? ( <p>Hola, { props.name }</p> ) : (<p>Hola, no estás loggeado aún.</p>) }
            <button onClick={() => {
                console.log('Botón pulsado.');
                setLogged(!logged);
            }}>
                {
                    logged ? 'Log out' : 'Login'
                }
            </button>

        </div>
    );
}

export default GreetingStyled;

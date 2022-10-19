import React, { useState } from 'react';


//login y logout buttons
const LoginBtn = ({ loginAction }) => {
    return(
        <button onClick={loginAction}>Login</button>
        )
}
const LogoutBtn = ({ logoutAction }) => {
    return(
        <button onClick={ logoutAction }>Logout</button>
        )

}



const OptionalRender = () => {

    const [access, setAccess] = useState(true);
    const [numMessage, setNumMessage] = useState(0);

    let optionalBtn;

    /*========
    Option de elemento condicional 1
    =========*/
    /*
    const updateAccess = () => {
        //cambio de valor inicial
        setAccess(!access)
    }
    */
    /*
    if (access){
        optionalBtn = <button onClick={updateAccess}>Logout</button>
    } else {
        optionalBtn = <button onClick={updateAccess}>Log in</button>
    }
*/

    /* =====
    Opcion 2 de hacer condicional usan componentes dentro del mismo componente 
    =======*/
    const loginAction = () => {
        setAccess(true)
    }
    const logoutAction = () => {
        setAccess(false)
    }

    if (access){
        optionalBtn = <LogoutBtn logoutAction={logoutAction}/>
    } else {
        optionalBtn = <LoginBtn loginAction={loginAction}/>
    }
    
    
    let addMessages = () => {
        setNumMessage(numMessage + 1)
    }




    return (
        <div>
            {/* Btn opcional */}
            { optionalBtn }
            {/* número de mensajes sin leer */}
            { numMessage > 0 && <p>Tienes { numMessage } sin leer.</p> }
            { numMessage === 0 && <p>No tienes mensajes nuevos</p> }
            {/* operador terneario */}
            { numMessage > 0 ? <p>Tienes { numMessage } sin leer...</p> : <p>No tienes nuevos mensajes.</p> }
            <button onClick={ addMessages }>{ numMessage == 0 ? 'Añadir nuevo Mensaje' : 'Añadir mensajes' }</button>
        </div>
    );
}

export default OptionalRender;

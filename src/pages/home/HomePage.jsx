import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const HomePage = () => {

    const location = useLocation();
    const history = useNavigate();
    console.log('estamos en ruta:', location.pathname);

    return (
        <div>
            <h1>Home Page</h1>
            <div>
                {/* dentro de navigate puede ir la ruta a la que queramos ir */}
                <button onClick={() => history('/about')}>About</button>
                {/* con esto puedo ir a las páginas anteriores navigate(-1) */}
                <button onClick={() => history(-1)}>Atras</button>
                {/* Para navegar hacia adelante  */}
                <button onClick={() => history( 1)}>Adelante</button>
                <button onClick={() => history('/profile')}>Perfil</button>
            </div>
        </div>
    );
}

export default HomePage;

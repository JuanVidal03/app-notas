import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const AboutPage = () => {

    const location = useLocation();
    const history = useNavigate();
    console.log('estamos en ruta:', location.pathname);

    //funcion para acceder a una ruta 
    const navigate = ( path ) => {
        history(path)
    }

    return (
        <div>
            <h1>About Us | FAQS Page</h1>
            <div>
                {/* dentro de navigate puede ir la ruta a la que queramos ir */}
                <button onClick={() => navigate('/')}>Home</button>
                {/* con esto puedo ir a las páginas anteriores navigate(-1) */}
                <button onClick={() => history(-1)}>Atras</button>
                {/* Para navegar hacia adelante  */}
                <button onClick={() => history( 1)}>Adelante</button>
            </div>
        </div>
    );
}

export default AboutPage;

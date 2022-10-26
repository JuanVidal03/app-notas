import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {

    const history = useNavigate();

    return (
        <div>
            <h1>404</h1>
            <h3>Página no encontrada.</h3>
            {/* para ir a home page */}
            <button onClick={() => history('/') }>Ir a Home</button>
        </div>
    );
}

export default NotFound;
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

const HomePage = () => {

    const location = useLocation();
    const history = useNavigate();
    console.log('estamos en ruta:', location.pathname);
    const navigate = useNavigate()

    //no estoy seguro que funcione porque él lohace con react router dom v6
    const navigateProps = (path) => {
        navigate({
            pathname: path,
            search: '?online=true',
            state: {
                online: true,
            }
        })
    }

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
                <button onClick={() => navigateProps('/online-state')}>ir ala página con state query params</button>

                <Button variant='contained' onClick={ () => history('/login') }>Log in</Button>
                <Button variant='contained' onClick={ () => history('/register') }>Register</Button>
            </div>
        </div>
    );
}

export default HomePage;

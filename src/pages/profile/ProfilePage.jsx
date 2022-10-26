import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePage = ({ user }) => {

    //inicializamos usenavigate para usarlo 
    const history = useNavigate();

    return (
        <div>
            <h1>Tu perfil</h1>
            <button onClick={() => history(-1) }>Atras</button>
            <button onClick={() => history('/tasks') }>Tus tareas</button>
        </div>
    );
}

export default ProfilePage;

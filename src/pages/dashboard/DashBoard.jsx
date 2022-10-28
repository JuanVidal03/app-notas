import React from 'react';
import Button from '@mui/material/Button';
import CopyRight from '../../components/pure/CopyRight';
import { useNavigate } from 'react-router-dom';

const DashBoardPage = () => {

    const logout = useNavigate();

    return (
        <div>
            <Button variant='contained' onClick={ () => logout('/login') }>Log Out</Button>
            <Button variant='contained' onClick={ () => logout('/tasks') }>Tareas</Button>
            <CopyRight/>
        </div>
    );
}

export default DashBoardPage;

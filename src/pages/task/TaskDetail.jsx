import React from 'react';
import { useParams } from 'react-router-dom';

const TaskDetail = () => {

    const { id } = useParams();

    return (
        <div>
            <h1>Detalles de la tarea: { id }</h1>
        </div>
    );
}

export default TaskDetail;

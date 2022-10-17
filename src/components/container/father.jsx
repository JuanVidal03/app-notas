import React, {useState} from 'react';
import Child from '../pure/child';

const Father = () => {

    const [nombre,setNombre] = useState('Usuario');

    const mostrarMensaje = ( text ) => {
        alert(`Mensaje recibido: ${text}`)
    }

    const actualizarNombre = (nuevoNombre) => {
        setNombre(nuevoNombre);
    }

    return (
        <div style={ {backgroundColor: 'tomato', padding: '10px'} }>
            <Child name={nombre} send={mostrarMensaje} actualizar={actualizarNombre}/>
        </div>
    );
}

export default Father;
import React, { useRef } from 'react';
import  { PropTypes } from 'prop-types';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';
import TaskListComponent from '../../container/task_list';

const TaskForm = ( { add, length } ) => {

    //hago las referencias de los elementos
    const nameRef = useRef('');
    const descriptionRef = useRef('');
    const levelRef = useRef(LEVELS.NORMAL);

    const addTask = (e) => {
        e.preventDefault();

        const newTask = new Task(
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value
        );

        add(newTask);
    }
    
    
    return (
        <form onSubmit={ addTask } className='d-flex  justify-content align-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <input ref={ nameRef } id='inputName' type='text' className='form-control form-control-lg' required placeholder='Nombre de la Tarea'/>
                <input ref={ descriptionRef } id='inputDescription' type='text' className='form-control form-control-lg' required placeholder='Descripción de la Tarea'/>
                <select className='form-control form-control-lg' ref={ levelRef } defaultValue={ LEVELS.NORMAL} id='selectLevel'>
                    <option value={ LEVELS.NORMAL }>Normal</option>
                    <option value={ LEVELS.URGENT }>Urgente</option>
                    <option value={ LEVELS.BLOCKING }>Bloqueada</option>
                </select>
                <button type='submit' className='btn btn-success btn-lg ms-2'>{length > 0 ? 'Añadir' : 'Crear'}</button>
            </div>
        </form>
    );
}

TaskForm.propTypes = {
    add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired
}


export default TaskForm;

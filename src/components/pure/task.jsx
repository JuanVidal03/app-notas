import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import { useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum';

//importamos hoja de estilos
import '../../styles/task.scss'


//componente de la tarea, recibe como parametros instancias de la clase Task ubicada en task.class.js
const TaskComponent = ({ task, completed, remove }) => {

    //función que retorna un badge dependiendo el level de la tarea
    const taskLevelBadge = () => {
        switch(task.level) {
            case LEVELS.NORMAL:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-primary'>
                            { task.level }
                        </span>
                    </h6>
                )
            case LEVELS.URGENT:
            return(
                <h6 className='mb-0'>
                    <span className='badge bg-warning'>
                        { task.level }
                    </span>
                </h6>
            )
            case LEVELS.BLOCKING:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-danger'>
                            { task.level }
                        </span>
                    </h6>
                )
                default:
                    break;
        }
    }

    //funcion para cambiar el icono del estado del completed
    const taskCompletedIcon = () => {
        if (task.completed) {
            return ( <i onClick={ () => completed(task) } className='bi-toggle-on task-action' style={ { color: 'green', fontWeight: 'bold', fontSize: '1.2rem' } }></i> )
        } else {
            return ( <i onClick={ () => completed(task) } className='bi-toggle-off task-action' style={ { color: 'grey', fontWeight: 'bold', fontSize: '1.2rem' } }></i> )
        }
    }


    return(

        <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{ task.name }</span>
            </th>
            <td className='align-midle'>
                <span>{ task.description }</span>
            </td>
            <td className='align-midle'>
                {/* llamado a la función para que retorne el color del badge del element */}
                <span>{ taskLevelBadge() }</span>
            </td>
            <td className='align-midle'>
                {/* llamado a la funcon que retorna el icon dependiendo el estado de la clave */}
                { taskCompletedIcon() }
                <i onClick={ () => remove(task) } className='bi-trash task-action' style={ { color: 'tomato', fontSize: '1.2rem' } }></i>
            </td>
        </tr>

    )
}


TaskComponent.propTypes = {
    //instanceof es una instancia de la clase Task que se encuenta en task.class.js
    task: PropTypes.instanceOf(Task).isRequired,
    completed: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
}

export default TaskComponent;
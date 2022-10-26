import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskComponent from "../pure/task";
import { useState, useEffect } from "react";
import TaskForm from "../pure/forms/taskForm";

//importamos hoja de estilos
import '../../styles/task.scss';


const TaskListComponent = () => {

    //creo una variable e invoco al elemento contructor que se encuentra en task.class.js y el elemento LEVEL para la ultima propiedad.
    const defaultTask1 = new Task('ejemplo1', 'descripción por defecto1', false, LEVELS.NORMAL);
    const defaultTask2 = new Task('ejemplo2', 'descripción por defecto2', true, LEVELS.URGENT);
    const defaultTask3 = new Task('ejemplo3', 'descripción por defecto3', true, LEVELS.BLOCKING);

    //estado del componente
    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, []);
    
    //función para completar una tarea
    const completedTask = ( task ) => {
        const index = tasks.indexOf( task );
        const tempTask = [...tasks];

        tempTask[index].completed = !tempTask[index].completed;
        //actualizamos el estado del componente y actualizamos la iteración de las tareas en el orden quese muestran las tareas
        setTasks(tempTask);
    }

    //función para eliminar una tarea
    const deleteTask = (task) => {
        const index = tasks.indexOf( task );
        const tempTask = [...tasks];

        tempTask.splice(index,1);
        setTasks(tempTask);
    }

    //para añadir tareas
    const addTask = (task) => {
        const tempTask = [...tasks];

        tempTask.push(task);
        setTasks(tempTask);
    }

    //contiene la información de las tareas
    const Table = () => {
        return(
            <table>
                <thead>
                    <tr>
                        <th scope='col'>Titulo</th>
                        <th scope='col'>Descripción</th>
                        <th scope='col'>Prioridad</th>
                        <th scope='col'>Acciones</th>
                    </tr>
                </thead>

                <tbody>
                    {/* Iterar sobre la lista de tareas */}
                    {tasks.map((task, index) => {

                        return (
                        <TaskComponent
                            task={task} 
                            key={index} 
                            completed={ completedTask }
                            remove={ deleteTask }/>
                        );
                    })}
                </tbody>
            </table>
        )
    }

    //variable asignada para renderizar el contenido en caso tal si hay o no hay tareas. 
    let taskTable;

    //condicional por si no hay ninguna tarea
    if ( tasks.length > 0 ) {
        taskTable = <Table/>
    } else {
        taskTable = (
            <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <h3>No hay ninguna tarea.</h3>
                <h4>Debes crear una.</h4>
            </div>
        )
    }

    const loadingStyle = {
        color: 'gray',
        fontSize: '2rem',
        fontWeight: 'bold'
    }

     
    return(
        <div>
            <div className="col-12">

                <div className="card">

                    {/* Card Header */}
                    <div className="card-header p-3">
                        <h5>Tus Tareas:</h5>
                    </div>

                    {/* Card body */}
                    <div className="card-body" data-mbd-perfectscroollbar='true' style={ { position: 'relative', height: '400px' } }>
                       {/* Inicio tabla de tareas */}
                       { loading ? (<p style={loadingStyle}>Cargando...</p>) : taskTable }
                    </div>
                </div>
            </div>
            <TaskForm
                add={ addTask }
                length={tasks.length}
            />
        </div>
    )
}

export default TaskListComponent;
import React from 'react';
import  { PropTypes } from 'prop-types';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';
//Para el formulario
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from 'formik';

const TaskForm = ({ add }) => {

    /*
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

    Primer formulario de tareas
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
    
    */

    //valores iniciales
    const initialValues = {
        name: '',
        description: '',
        completed: false,
        level: LEVELS.NORMAL,
    }

    //esquema de validación
    const taskSchema = Yup.object().shape(
        {
            name: Yup.string()
                .required('¿Cómo se llama la tarea?')
                .max(20, 'El nombre de la tarea es muy largo.'),
            description: Yup.string()
                .required('¿Cual es la tarea?')
                .max(30, 'La descripción es muy larga.'),
            completed: Yup.boolean()
                .required('¿Ya completaste esta tarea?'),
            level: Yup.string()
                .required('¿Que tan importante es la tarea?')
                .oneOf([LEVELS.NORMAL, LEVELS.URGENT, LEVELS.BLOCKING], 'Debes elegir la intensidad de la tarea')
        }
    )


    return (
        <div>
            <h4>Agregar Tareas:</h4>

            {/* Se inicia Formik */}
            <Formik
            initialValues={initialValues}
            validationSchema={taskSchema}
            onSubmit={ async (values) => {
                const newTask = new Task(
                    values.name,
                    values.description,
                    false,
                    values.level
                );
        
                await new Promise((res) => setTimeout(res, 2000));
                add(newTask);
            } }
            >

                {/* acciones del formulario y mapeo de errores*/}
                {({touched, errors, isSubmitting }) => (

                        //inicio de formulario
                        <Form>

                            {/* <label htmlFor='username'>Nombre de</label> */}
                            {/* NOMBRE DE LA TAREA */}
                            <Field id='name' type='text' name='name' placeholder='Nombre de la Tarea.'/>

                            { 
                                errors.name && touched.name && 
                                (
                                    <ErrorMessage name='name'/>
                                )
                            }

                            {/* <label htmlFor='email'>E-mail</label> */}
                            {/* DESCRIPCIÓN DE LA TAREA */}
                            <Field id='description' type='text' name='description' placeholder='Descripción de la tarea'/>

                            {/* Validación por si hay algún error en el campo del email*/}
                            { 
                                errors.description && touched.description && 
                                (
                                    <ErrorMessage name='description'/>
                                )
                            }

                            {/* <label htmlFor='email'>E-mail</label> */}
                            {/* PRIORIDAD DE LA TAREA */}
                            <Field id='level' as='select' defaultValue={ LEVELS.NORMAL } name='level' placeholder='Descripción de la tarea'>
                                <option value={ LEVELS.NORMAL }>Normal</option>
                                <option value={ LEVELS.URGENT }>Urgente</option>
                                <option value={ LEVELS.BLOCKING }>Bloqueada</option>
                            </Field>

                            {/* Validación por si hay algún error en el campo del email*/}
                            { 
                                errors.level && touched.level && 
                                (
                                    <ErrorMessage name='level'/>
                                )
                            }
                            
        
                            <button type='submit'>Registrar</button>
                            { isSubmitting ? (<p>Creando Tarea...</p>) : null }
                        </Form>
                    )
            }

            </Formik>
        </div>
    );
}


TaskForm.propTypes = {
    add: PropTypes.func.isRequired,
    // length: PropTypes.number.isRequired
}

export default TaskForm;

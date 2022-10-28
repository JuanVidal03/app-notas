import React from 'react';
//importación de formularios
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
//model del usuario
import { User } from '../../../models/user.class';
import { ROLES } from '../../../models/roles.enum';
//importación Button de @mui/material
import Button from '@mui/material/Button';
//react router dom
import { useNavigate } from 'react-router-dom';

const RegisterFormik = () => {


    //navegar entre componentes o páginas
    const navigate = useNavigate();
    //plantilla de usuario
    let user = new User();

    //valores iniciales del formulario
    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirm: '',
        role: ROLES.USER,
    }

    //esquema de validación, definimos los campos que va a tener el formulario
    const registerSchema = Yup.object().shape(
        {
            username: Yup.string()
                .min(6, 'El nombre de usuario debe ser más largo.')
                .max(12, 'El nombre de usuario es muy largo.')
                .required('El nombre de usuario es requerido.'),
            email: Yup.string()
                .email('Email invalido.')
                .required('Email Obligatorio.'),
            role: Yup.string()
                .oneOf([ROLES.USER, ROLES.ADMIN], 'Debes elegir un rol de Usuario')
                .required('El rol es obligatorio'),
            password: Yup.string()
                .min(8, 'La contraseña es muy corta.')
                .required('Contraseña Obligatorio.'),
            confirm: Yup.string()
                .when("password", {
                    is: value => (value && value.length > 0 ? true : false),
                    then: Yup.string().oneOf(
                        [Yup.ref("password")],
                        'La contraseña debe coincidir.'
                    )
                })
                .required('Debes confirmar la contraseña.')
        }
    )


    const submit = (values) => {
        alert('Register user')
    }

    return(
        <div>
            <h4>Formulario de Registro.</h4>

            {/* Se inicia Formik */}
            <Formik
            initialValues={ initialValues }
            validationSchema={ registerSchema }
            onSubmit={ async (values) => {
                await new Promise((res) => setTimeout(res, 1000));
                alert(JSON.stringify(values, null, 2));
            }}>

            {/* acciones del formulario y mapeo de errores*/}
                {({values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur }) => (
                        //inicio de formulario
                        <Form>

                            <label htmlFor='username'>Nombre de Usuario</label>
                            <Field id='username' type='text' name='username' placeholder='Tu Nombre de Usuario.'/>

                            { 
                                errors.username && touched.username && 
                                (
                                    <ErrorMessage name='username'/>
                                )
                            }

                            <label htmlFor='email'>E-mail</label>
                            <Field id='email' type='email' name='email' placeholder='mail@mail.com'/>

                            {/* Validación por si hay algún error en el campo del email*/}
                            { 
                                errors.email && touched.email && 
                                (
                                    <ErrorMessage name='email'/>
                                )
                            }

                            <label htmlFor='password'>Contraseña</label>
                            <Field 
                            id='password'
                            name='password' 
                            placeholder='Contraseña'
                            type='password'
                            />

                            {/* Validación por si hay algún error en el campo del password*/}
                            { 
                                errors.password && touched.password && 
                                    (
                                        <ErrorMessage name='password'/>
                                    )
                            }

                            <label htmlFor='confirm'>Confirmar Contraseña</label>
                            <Field 
                            id='confirm'
                            name='confirm' 
                            placeholder='Confirmar Contraseña'
                            type='password'
                            />

                            {/* Validación por si hay algún error en el campo de la confirmació de password*/}
                            { 
                                errors.confirm&& touched.confirm && 
                                    (
                                        <ErrorMessage name='confirm'/>
                                    )
                            }
        
                            <button type='submit'>Registrar</button>
                            { isSubmitting ? (<p>Creando Usuario...</p>) : null }
                        </Form>
                    )
            }
        
            </Formik>
            <Button variant='contained' onClick={ () => navigate('/login') }>Log in</Button>
        </div>
    )

}

export default RegisterFormik;

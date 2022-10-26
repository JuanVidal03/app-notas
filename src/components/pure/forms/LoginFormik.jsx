import React from 'react';
//importamos libreria formik y yup
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

    //inicalizamos Yup para dar validación a los valores
    const loginSchema = Yup.object().shape(
        {
            email: Yup.string()
                    .email('Email invalido')
                    .required('Email Obligatorio'),
            password: Yup.string()
                    .required('Contraseña Obligatoria')

        }
    )



const LoginFormik = () => {

    //objeto con las credenciales inicales
    const initialCredential = {
        email: '',
        password: ''
    }

    return (

        //inicio del formulario
        <div>
            <h4>Log in Formik</h4>
            <Formik
                //valores iniciales del formulario
                initialValues={initialCredential}
                //esquema de validación, de la validación que se hizo arriba
                validationSchema={loginSchema}
                //evento de onsubmit 
                onSubmit={ async (values) => {
                    await new Promise((res) => setTimeout(res, 1000));
                    alert(JSON.stringify(values, null, 2));
                    //guardamos los datos en el localstorage    
                    localStorage.setItem('credentials', values);
                } }
            >

                {/* Obetenos props de Formik, esto es cómo un manejo de errores o eventos*/}
                { ({ errors, touched, isSubmitting }) => {

                    return(

                        //inicio de los valores del formulario
                        <Form>
                            {/* Field sirve para definir los campos */}
                            <label htmlFor='email'>E-mail</label>
                            <Field id='email' type='email' name='email' placeholder='mail@mail.com'/>

                                {/* Validación por si hay algún error en el campo del email*/}
                                { 
                                    errors.email && touched.email && 
                                    (
                                        <ErrorMessage name='email'/>
                                    )
                                }
        
                            <label htmlFor='password'>Password</label>
                            <Field 
                            id='password'
                            name='password' 
                            placeholder='Password'
                            type='password'
                            />

                            {/* Validación por si hay algún error en el campo del password*/}
                            { 
                                errors.password && touched.password && 
                                    (
                                        <ErrorMessage name='password'/>
                                    )
                            }
        
                            <button type='submit'>Submit</button>

                            { isSubmitting ? (<p>Iniciando...</p>) : null }
                        </Form>

                    )
                } }
                
            </Formik>
        </div>
    );
}

export default LoginFormik;

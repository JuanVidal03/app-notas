import React from 'react';

const AsyncExample = () => {

    

    async function generateNumber() {
        return 1; 
    }

    async function generatePromiseNumber() {
        return Promise.resolve(2)
    }

    function obtainNumber() {
        generateNumber()
            .then((res) => alert(`Response: ${res}`))
            .catch((err) => alert(`Somethig went wrong ${err}`))
    }

    function obtainPromiseNumber() {
        generatePromiseNumber()
            .then((res) => alert(`Response: ${res}`))
            .cath((err) => alert(`Somethig went wrong ${err}`))
    }

    //función asincrona, palabras reservadas async await
    //con esta función se guarda la clave y el valor en la session storage
    //retorna una promesa que se resuelve obteniendo la clave de lo paramatros pasados en otra función
    async function saveSessionStorage(key, value) {
        sessionStorage.setItem(key, value);
        return Promise.reject(sessionStorage.getItem(key))
    }

    //llamamos a la función de arriba y pasamos dos parametros, la clave se llama name y el valor es Martín.
    //entonces se plantean tres situaciones:
    //primero .then: coge la respuesta y la guarda en una variable que se llama value y lo muestra en un alert.
    //segundo caso .catch: en caso que haya un error esto es lo que se va a cumplir y va a retornara un error y el valor de los parametros pasados.
    // tercero: esto se va a ejecutar cuando no importa si funciona o no, es más que todo para cerrar el ciclo del proceso.
    function showStorage() {
        saveSessionStorage('name', 'Martín')
            .then((res) => {
                let value = res;
                alert(`Saved name: ${value}`)
            })
            .catch((err) => alert(`Something bad happend: ${err}`))
            .finally(() => alert('SUCCESS: Name saved and retreived'))
    }


    //Funcion haciendo un proceso async await, obtenemos un mensaje pasados 2 segundos
    async function obtainMessage() {

        //se crea una variable que guarda una promesa con una solución que se resuelve dentro de 2 segundos
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve('Hello world'), 2000)
        })

        //esperamos a que la promesa se resuelva y por eso se utiliza await con el promise, deido a que no es proceso asincrono
        // lanza un alert con el mensaje.
        let message = await promise;
        alert(`Mensaje: ${message}`)
    }

    /* DEVOLVIENDO ERRORES */
    //Para los errores se debe saber que sigue despues de la promesa:
    //Si es Promise.resolve es porque la promesa se va a resiolver
    //Si es Promise.reject es porque la promesa NO se va a resiolver
    const returnError = async() => {
        await Promise.reject(new Error('Ooops'))
    }

    const consumeError = () => {
        returnError()
            .then((res) => alert(`Everething is Ok: ${res}`))
            .catch((err) => alert(`Something went wrong: ${err}`))
            .finally(() => alert('Proceso terminado.'))
    }

    /* USANDO TRY Y CATCH */
    const urlNotFound = async() => {
        try{
            let res = await fetch('https://google.com');
            alert(`response: ${JSON.stringify(res)}`)
        }
        catch(err){
            alert(`Something went wrong with the URL: ${err} (check the console) `)
        }
    }

    /* GESTIONAR VARIAS PROMESAS A LA VEZ*/

    const multiplePromise = async() => {
        let results = await Promise.all(
            [
                fetch('https:/reqrers.in/api/users'),
                fetch('https://reqres.in.api/users?page=2')
            ]
        ).catch((err) => alert(`Something went wrong with the URL: ${err} (check the console) `))
    }


    return (
        <div>
            <h1>Ejemplo de asincronia ( Async, Promise Examples )</h1>
            <button onClick={obtainNumber}>Obtain Number</button>
            <button onClick={obtainPromiseNumber}>Obtain Promise Number</button>
            <button onClick={showStorage}>Obtain key and value</button>
            <button onClick={obtainMessage}>Obtain Message</button>
            <button onClick={consumeError}>Obtain Error</button>
            <button onClick={urlNotFound}>Request to Unknown URL</button>
            <button onClick={multiplePromise}>Multiple Promises</button>
            
        </div>
    );
}

export default AsyncExample;

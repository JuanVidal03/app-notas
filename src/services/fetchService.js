
//obteniendo datos
// se usa async debido a que la info proviene de un servidor distintos a nuestra maquina
export const getAllUsers = async() => {

    //en esta variable va estar la url de donde es el origen de los datos
    let res = await fetch('https://reqres.in/api/users');
    console.log('Response: ', res);
    console.log('Status:', res.status);
    console.log('OK?', res.ok);

    // el archivo que nos devuelve es un archivo json a un objeto de JS
    return res.json();
}


// obteniendo las páginasd de los users
export const getAllPagedUsers = async(page) => {

    //en esta variable va estar la url de donde es el origen de los datos
    let res = await fetch(`https://reqres.in/api/users?page=${page}`);
    console.log('Response: ', res);
    console.log('Status:', res.status);
    console.log('OK?', res.ok);

    // el archivo que nos devuelve es un archivo json a un objeto de JS
    return res.json();
}

export const getUserDetails = async(id) => {
    //en esta variable va estar la url de donde es el origen de los datos
    let res = await fetch(`https://reqres.in/api/users/${id}`);
    console.log('Response: ', res);
    console.log('Status:', res.status);
    console.log('OK?', res.ok);

    // el archivo que nos devuelve es un archivo json a un objeto de JS
    return res.json();
}
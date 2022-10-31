import React, { useEffect, useState } from 'react';
import { getAllUsers, getAllPagedUsers, getUserDetails } from '../../services/fetchService';

const FetchExample = () => {
    //inicializamos el estado de los usuarios en 0
    const [users, setUsers] = useState([]);
    //guardamos num de páginas
    const [pages, setPages] = useState(2);
    // num total de users
    const [totalUser, setTotalUser] = useState(12);
    // user por página
    const [userPerPage, setUserPerPage] = useState(6);
    // para seleccionar user
    const [selectedUser, setSelectedUser] = useState({});

    // con este use effect obtenemos los datos antes de que el dom sa renderizado
    useEffect(() => {
        obtainUsers();
    }, []);

    //función con la que obtendremos la respuesta o error de la petición
    const obtainUsers = () => {

        // llamamos a la función de fecthService.js
        getAllUsers()
            .then((res) => {
                console.log('All users:', res.data);
                // actualiza estado de los users que era un array vacio 
                setUsers(res.data);
            })
            .catch((err) => {
                alert(err)
            })
            .finally(() => {
                console.log('proceso terminao.')
                console.table(users)
            })

    }

    const obtainPagedUsers = (page) => {

        // llamamos a la función de fecthService.js
        getAllPagedUsers(page)
            .then((res) => {
                console.log('Al paged users:', res.data);
                // actualiza estado de los users que era un array vacio 
                setUsers(res.data);
                setPages(res.total_pages);
                setTotalUser(res.total);
                setUserPerPage(res.per_page);
            })
            .catch((err) => {
                alert(err)
            })
            .finally(() => {
                console.log('proceso terminao.')
                console.table(users)
            })

    }

    const obtainUserDetails = (id) => {
        getUserDetails(id)
            .then((res) => {
                console.log('Al paged users:', res.data);
                // actualiza estado de los users que era un array vacio 
                setSelectedUser(res.data)
            })
            .catch((err) => {
                alert(err)
            })
            .finally(() => {
                console.log('proceso terminao.')
                console.table(selectedUser)
            })
    }


    return (
        <div>
            <h2>Users:</h2>
            {
                users.map((user, index) => {
                    return(
                        <div key={index}>

                            <p onClick={() => obtainUserDetails(user.id)}>
                                Hola, {user.first_name} {user.last_name}
                            </p>
                            <img src={user.avatar}/>
                        </div>
                    )
                })
            }
            <p>Mostrando { userPerPage } user of { totalUser } in total.</p>
            <button onClick={() => obtainPagedUsers(1)}>1</button>
            <button onClick={() => obtainPagedUsers(2)}>2</button>
            <div>
                <h3>User Details</h3>
                {
                    selectedUser && (
                        <div>
                            <p>First Name: {selectedUser.first_name}</p>
                            <p>Last Name: {selectedUser.last_name}</p>
                            <p>Email: {selectedUser.email}</p>
                            <img src={selectedUser.avatar} style={{height: '500px', width: '500px'}}/>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default FetchExample;

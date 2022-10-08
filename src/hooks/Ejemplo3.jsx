//ejemplo del useState y useContext
import React, { useState, useContext } from "react"

//inicializamos el estado vacio y luego se va a rellenar con los datos de contexto del padre
const miContexto = React.createContext(null);

//componente 1 dispone de un contexto que va a tener un valor que recibe del padre
const Componente1 = () => {

    const state = useContext(miContexto);

    return(
        <div>
            <h2>El Token es : {state.token}</h2>
            <h2>El estado es : {state.sesion}</h2>
            {/* llamamos al componente 2 */}
            {/* <Componente2/> */}
        </div>
    )
}
/*
const Componente2 = () => {

    const state = useContext(miContexto); 

    return(
        <div>
            <h2>La sesión es: {state.sesion}</h2>
        </div>
    )
}
*/

const MiComponenteConContexto = () => {

    const estadoInicial = {
        token: '1234567',
        sesion: 1
    }

    //creamos estado de este componente
    const [sesionData, setSesionData] = useState(estadoInicial);


    function actualizarSesion() {
        setSesionData({
            token: 'asfkuavfube2',
            sesion: sesionData.sesion + 1
        })
    }

    return(

            <miContexto.Provider value={sesionData}>
                {/* Todo lo que este adentro puede leer los datos de sesion data */}
                {/* Si se actualiza los componentes de aqui, tambien los actualiza */}
                <h1>Ejemplo useState y useContext</h1>
                <Componente1/>
                <button onClick={actualizarSesion}>Actualizar sesión</button>
            </miContexto.Provider>
        
    )
}


export default MiComponenteConContexto;
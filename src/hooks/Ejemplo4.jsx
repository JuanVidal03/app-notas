//ejemplo para entender el uso de props.children

const Ejemplo4 = (props) => {
    return(
        <div>
            <h1>Ejemplo Children Props</h1>
            <h2>Nombre: {props.nombre}</h2>

            {/* props. children pintara por defecto lo que se encuentre entre las etiquetas de apertura y cierre de este componente de orden superior */}
            {props.children}
        </div>
    )
}

export default Ejemplo4;
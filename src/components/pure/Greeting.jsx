import React, { Component } from 'react';
import PropTypes from 'prop-types';


/*===================
COMPONENTE CLASE
======================*/
//estructura de un componente basado en clase
class Greeting extends Component {

    constructor(props){
        super(props);
        this.state = {
            edad: 18,
            nombre: 'Juan',
        }
    }

    render(){
        return(
            <div>
                <h1>Hola! Soy un componente de clase. y mi edad es { this.state.edad }</h1>
                <h2>Y tu nombre es {this.props.nombre}</h2>
                <div>
                    <button onClick={this.cumpleanios}>Aumentar edad</button>
                </div>
            </div>
        )
    }

    //esta funcion aumenta el valor de la edad cada vez que se le de click.
    cumpleanios = () => {
        this.setState((prevState) => (
            {
                edad: prevState.edad +1
            }
        ))
    }

}


//proptypes especifica el tipo de dato que debe recibir las props
Greeting.propTypes= {
    name: PropTypes.string,
    edad: PropTypes.number
}


export default Greeting;
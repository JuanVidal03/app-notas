//Ejemplo de componente tipo clase que dispone de los metodos de ciclo de vida

import { Component } from "react";



class LifeCycleExample extends Component{
    constructor(props){
        super(props);
        console.log('Cuando se instancia el componente');
    }

    componentWillMount(){
        console.log('WILLMOUNT: Antes del montaje del componente');
    }

    componentDidMount(){
        console.log('DIDMOUNT: Justo al acabar el montaje del componente antes de renderizarlo.');
    }

    componentWillReceiveProps(nextProps){
        console.log('WILLRECIVEPROPS: Si va a recibir props');
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('OMPONENTEUPDATE: Si el componente debe o no actualizarse');
    }

    componentWillUpdate(nextProps, nextState){
        console.log('WILLUPDATE: Justo antes de actualizarse');
    }

    componentDidUpdate(prevProps, prevState){
        console.log('DIDUPDATE: Justo despues de actualizarse.');
    }

    componentWillUnmount(){
        console.log('WILLUNMOUNT: Justo antes de sesaparecer.');
    }

    render(){
        return(
            <div>
                <h1>Ciclo de vida componentes de clase</h1>
            </div>
        )
    }

}
import './App.css';
// import OptionalRender from './components/pure/forms/optionalRender';
// import Father from './components/container/father';
// import Greeting from './components/pure/Greeting';
// import GreetingFunc from './components/GreetingFunc';
// import Ejemplo1 from './hooks/Ejemplo1';
// import Ejemplo2 from './hooks/Ejemplo2';
// import MiComponenteConContexto from './hooks/Ejemplo3';
// import Ejemplo4 from './hooks/Ejemplo4';
// import GreetingStyled from './components/pure/greetingStyled';
import TaskListComponent from './components/container/task_list';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/*<Greeting nombre={'Mateo'}/>*/}
        {/*<GreetingFunc nombre='Julio'/>*/}
        {/* <Ejemplo1 /> */}
        {/* <Ejemplo2/> */}
        {/* <MiComponenteConContexto/> */}
        {/* <Ejemplo4 nombre='Juan'> */}
          {/* <h3>Contenido del props.children</h3> */}
        {/* </Ejemplo4> */}
        {/* <GreetingStyled name='juan'/> */}
        {/* </header> */}
        {/* <Father/> */}
        {/* Ejemplos renderizado condicional */}
        {/* <OptionalRender/> */}
        
        {/* PROYECTO */}
        <TaskListComponent/>
    </div>
  );
}

export default App;

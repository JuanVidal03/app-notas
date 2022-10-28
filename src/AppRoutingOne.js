import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { useEffect } from 'react'
import HomePage from './pages/home/HomePage';
import NotFound from './pages/404/NotFound';
import AboutPage from './pages/about-faqs/AboutPage';
import ProfilePage from './pages/profile/ProfilePage';
import TaskPage from './pages/task/TaskPage';
import TaskDetail from './pages/task/TaskDetail';
import LoginPage from './pages/auth/LoginPage';
import PropsPage from './pages/home/PropsPage';


function AppRoutingOne() {

  //para no cargar la página de profile
  const logged = true;
  let loggedLocalStorage = false;

  //se usa useEffec debido a que hay un  cambio directo en el DOM
  useEffect(() => {

    //en el formulario de Loginformik guarda los datos en eol localstorage.
    loggedLocalStorage = localStorage.getItem('credentials');
    console.log('user logged', loggedLocalStorage)
    
  }, []);


  //LISTA DE TAREAS DE PRUEBA
  let taskList = [
    {
      id: 1,
      name: 'Task 1',
      description: 'Mi primer tarea'
    },
    {
      id: 2,
      name: 'Task 2',
      description: 'Mi segunda tarea',
    }
  ]


  return (
    <Router>

      <div>
        <aside>
          <Link to='/'>| HOME |</Link>
          <Link to='/about'>| ABOUT |</Link>
          <Link to='/faqs'>| FAQS |</Link>
          <Link to='/contact'>| 404 |</Link>
          <Link to={loggedLocalStorage ? '/' : '/login'}>| LOG IN |</Link>
          <Link to='/task/1'>| TASK1 |</Link>
          <Link to='/task/2'>| TASK2 |</Link>
        </aside>

        <main>
          <Routes>
            <Route exact path='/' element={ <HomePage/> }/>
            <Route exact path='/online-state' element={ <PropsPage/> }/>
            <Route exact path='/login' element={ <LoginPage/> }/>
            <Route path='/login' element={ loggedLocalStorage ? <HomePage/> : <Navigate to='/login'/>}/>
            <Route exat path='/about' element={ <AboutPage/> }/>
            <Route exat path='/faqs' element={ <AboutPage/> }/>
            {/* EJEMPLO DE REDIRECCIONES */}
            <Route path='/profile' element={ loggedLocalStorage ? <ProfilePage/> : <Navigate to="/login"/>} />
            <Route path='/tasks' element={<TaskPage/>} />

            <Route exact path='/task/:id' render = {
              ({ match }) => (<TaskDetail task={ taskList[match.params.id-1] }/>)
            }>

            </Route>


            {/* 404 Page not found */}
            <Route path='*' element={ <NotFound/> }/>
          </Routes>

        </main>
      </div>
    </Router>
  );
}

export default AppRoutingOne;

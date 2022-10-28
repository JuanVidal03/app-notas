import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import NotFound from './pages/404/NotFound';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import DashBoardPage from './pages/dashboard/DashBoard';
import TaskPage from './pages/task/TaskPage';
import HomePage from './pages/home/HomePage';

function AppRoutingFinal() {

  //TODO: cambiar valor desde sesion storage
  let loggedin = true;


  return (
    <Router>
      {/* Routes */}
      <Routes>
        {/* Home route */}
        <Route exact path='/' element={ <HomePage/> } />
        {/* Start Redirections */}
        <Route exact path='/dashboard' element={ loggedin ? <DashBoardPage/> : <Navigate to='/login'/> }/>
        {/* End Redirections */}
        {/* Login route */}
        <Route exact path='/login' element={ <LoginPage/> }/>
        {/* Register route */}
        <Route exact path='/register' element={ <RegisterPage/> }/>
        {/* Dashborad */}
        <Route exact path='/dashboard' element={ <DashBoardPage/> }/>
        {/* Task route */}
        <Route exact path='/tasks' element={ <TaskPage/> }/>


        {/* 404 */}
        <Route path='*' element={ <NotFound/> }/>
      </Routes>
    </Router>
  );
}

export default AppRoutingFinal;

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import NotFound from './pages/404/NotFound';
import AboutPage from './pages/about-faqs/AboutPage';
import ProfilePage from './pages/profile/ProfilePage';
import TaskPage from './pages/task/TaskPage';
import TaskDetail from './pages/task/TaskDetail';


function AppRoutingOne() {
  return (
    <Router>

      <div>
        <aside>
          <Link to='/'>| HOME |</Link>
          <Link to='/about'>| ABOUT |</Link>
          <Link to='/faqs'>| FAQS |</Link>
          <Link to='/hola'>| HOLA |</Link>
        </aside>

        <main>
          <Routes>
            <Route exact path='/' element={ <HomePage/> }/>
            <Route exat path='/about' element={ <AboutPage/> }/>
            <Route exat path='/faqs' element={ <AboutPage/> }/>
            <Route exat path='/profile' element={ <ProfilePage/> }/>
            <Route path='tasks' element={<TaskPage/>} />
            <Route path='/task/:id' element={<TaskDetail/>}/>


            {/* 404 Page not found */}
            <Route path='*' element={ <NotFound/> }/>
          </Routes>

        </main>
      </div>
    </Router>
  );
}

export default AppRoutingOne;

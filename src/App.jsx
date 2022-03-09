import { useState, useContext } from 'react';
import Navbar from './components/UI/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ScrollToTop from './components/utilities/ScrollToTop';
import Error404 from './pages/Error404';
import Signin from './pages/Signin';
import { Auth } from './context/authContext';
import AllRestaurants from './components/restaurants/AllRestaurants';

function App() {
  const authCtx = useContext(Auth);
  const isLoggedIn = authCtx.isLoggedIn;

  return (
    <Router>
      <Navbar />
      <ScrollToTop>
        <Routes>
          {isLoggedIn && <Route path='/' element={<Dashboard />} />}
          {!isLoggedIn && <Route path='/signin' element={<Signin />} />}
          {!isLoggedIn && (
            <Route
              path='/'
              element={<Navigate replace={true} to='/signin' />}
            />
          )}
          {isLoggedIn && (
            <Route
              path='/signin'
              element={<Navigate replace={true} to='/' />}
            />
          )}
          <Route path='/restaurants' element={<AllRestaurants />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </ScrollToTop>
    </Router>
  );
}

export default App;

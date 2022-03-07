import { useState } from 'react';
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

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </ScrollToTop>
    </Router>
  );
}

export default App;

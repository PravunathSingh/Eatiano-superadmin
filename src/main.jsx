import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AuthProvider from './context/authContext';
import RestaurantsProvider from './context/restaurantsContext';
import BlogsProvider from './context/blogsContext';

ReactDOM.render(
  <AuthProvider>
    <RestaurantsProvider>
      <BlogsProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BlogsProvider>
    </RestaurantsProvider>
  </AuthProvider>,
  document.getElementById('root')
);

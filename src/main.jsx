import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AuthProvider from './context/authContext';
import RestaurantsProvider from './context/restaurantsContext';
import BlogsProvider from './context/blogsContext';
import CouponsProvider from './context/couponContext';
import MembershipsProvider from './context/membershipContext';
import AgentsProvider from './context/deliveryContext';

ReactDOM.render(
  <AuthProvider>
    <RestaurantsProvider>
      <BlogsProvider>
        <CouponsProvider>
          <MembershipsProvider>
            <AgentsProvider>
              <React.StrictMode>
                <App />
              </React.StrictMode>
            </AgentsProvider>
          </MembershipsProvider>
        </CouponsProvider>
      </BlogsProvider>
    </RestaurantsProvider>
  </AuthProvider>,
  document.getElementById('root')
);

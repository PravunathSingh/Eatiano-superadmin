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
import ExpenseProvider from './context/expensesContext';
import AdminProvider from './context/adminContext';
import WarehouseProvider from './context/warehouseContext';
import OrdersProvider from './context/ordersContext';
import OtherStatsProvider from './context/otherStatsContext';

ReactDOM.render(
  <AuthProvider>
    <AdminProvider>
      <OtherStatsProvider>
        <RestaurantsProvider>
          <BlogsProvider>
            <CouponsProvider>
              <MembershipsProvider>
                <AgentsProvider>
                  <ExpenseProvider>
                    <WarehouseProvider>
                      <OrdersProvider>
                        <React.StrictMode>
                          <App />
                        </React.StrictMode>
                      </OrdersProvider>
                    </WarehouseProvider>
                  </ExpenseProvider>
                </AgentsProvider>
              </MembershipsProvider>
            </CouponsProvider>
          </BlogsProvider>
        </RestaurantsProvider>
      </OtherStatsProvider>
    </AdminProvider>
  </AuthProvider>,
  document.getElementById('root')
);

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
import AddRestaurant from './components/restaurants/addRestaurant/AddRestaurant';
import EditRestaurant from './components/restaurants/editRestaurant/EditRestaurant';
import AllProducts from './components/products/AllProducts';
import AddProduct from './components/products/addProduct/AddProduct';
import EditProduct from './components/products/editProduct/EditProduct';
import AllBlogs from './components/blogs/AllBlogs';
import AddBlog from './components/blogs/addBlog/AddBlog';
import EditBlog from './components/blogs/editBlog/EditBlog';
import BlogDetails from './components/blogs/blogDetails/BlogDetails';

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
          <Route path='/blogs' element={<AllBlogs />} />
          <Route path='/editRestaurant/:id' element={<EditRestaurant />} />
          <Route path='/editProduct/:id' element={<EditProduct />} />
          <Route path='/editBlog/:id' element={<EditBlog />} />
          <Route path='/blogDetails/:id' element={<BlogDetails />} />
          <Route path='/restaurantProducts/:id' element={<AllProducts />} />
          <Route path='/restaurantProducts/add/:id' element={<AddProduct />} />
          <Route path='/restaurants/add' element={<AddRestaurant />} />
          <Route path='/blogs/add' element={<AddBlog />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </ScrollToTop>
    </Router>
  );
}

export default App;

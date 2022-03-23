import React, { useState, useEffect, useRef, useContext } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { Auth } from '../../../context/authContext';
import WarehouseList from './WarehouseList';

const AdminWarehouse = () => {
  const [warehouse, setWarehouse] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const { id } = useParams();
  const authCtx = useContext(Auth);
  const token = authCtx.token;
  const searchRef = useRef();

  useEffect(() => {
    const getWarehouse = async () => {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(
        `https://achievexsolutions.in/current_work/eatiano/api/super_admin/warehouse/${id}`,
        config
      );

      const resData = response.data.data;
      setWarehouse(resData);
    };

    getWarehouse();
  }, []);

  console.log(warehouse);

  const searchHandler = (e) => {
    setSearchTerm(e.target.value);
    if (searchTerm !== '') {
      const filteredWarehouse = warehouse.filter((warehouse) => {
        return Object.values(warehouse)
          .join(' ')
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(filteredWarehouse);
    } else {
      setSearchResults(warehouse);
    }
  };

  const searchFormHandler = (e) => {
    e.preventDefault();
    setSearchTerm('');
  };

  return (
    <div className='container mt-24 md:mt-32 lg:mt-48 font-rubik'>
      <h2 className='mb-10 text-center text-gray-100 lg:text-left md:text-2xl lg:text-3xl md:mb-16'>
        All Warehouse
      </h2>

      <div className='grid gap-2 md:gap-6 md:grid-cols-4 lg:grid-cols-7 md:place-content-center md:place-items-center'>
        <div className='w-full md:col-span-2 lg:col-span-5'>
          <form onSubmit={searchFormHandler}>
            <input
              type='text'
              placeholder='Search Warehouse...'
              className='w-full px-4 py-2 text-gray-200 border-2 rounded-md border-secondary lg:text-lg bg-primary focus:ring-2 ring-offset-2 ring-offset-secondary'
              ref={searchRef}
              onChange={searchHandler}
              value={searchTerm}
            />
          </form>
        </div>

        <div className='md:col-span-2 lg:col-span-2'>
          <Link to={`/admin/warehouse/add/${id}`}>
            <button className='w-full px-8 py-2 my-6 text-lg font-medium text-gray-900 transition-all duration-300 rounded-lg md:w-auto hover:text bg-cta md:text-xl hover:bg-cta-dark hover:scale-110 focus:ring-2 ring-offset-2 ring-cta-dark'>
              Add New Warehouse
            </button>
          </Link>
        </div>
      </div>

      <WarehouseList
        allWarehouse={searchTerm.length < 1 ? warehouse : searchResults}
      />
    </div>
  );
};

export default AdminWarehouse;

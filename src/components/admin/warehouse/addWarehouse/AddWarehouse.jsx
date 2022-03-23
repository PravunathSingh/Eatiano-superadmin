import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Auth } from '../../../../context/authContext';

const AddWarehouse = () => {
  const [newWarehouse, setNewWarehouse] = useState({
    address: '',
    lat: '',
    lng: '',
    status: '',
  });

  const authCtx = useContext(Auth);
  const token = authCtx.token;

  const newWarehouseHandler = (e) => {
    setNewWarehouse({ ...newWarehouse, [e.target.name]: e.target.value });
  };

  const addNewWarehouse = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    };

    const formData = new FormData();
    formData.append('address', newWarehouse.address);
    formData.append('lat', newWarehouse.lat);
    formData.append('lng', newWarehouse.lng);
    formData.append('status', newWarehouse.status);

    const response = await axios.post(
      'https://achievexsolutions.in/current_work/eatiano/api/super_admin/warehouse',
      formData,
      config
    );

    setNewWarehouse({
      address: '',
      lat: '',
      lng: '',
      status: '',
    });

    const resData = await response.data;
    console.log(resData);

    window.location.reload();
  };

  return (
    <div className='container my-24 md:my-32 lg:my-44 font-rubik'>
      <h1 className='mb-10 text-center text-gray-100 md:text-2xl lg:text-3xl md:mb-16'>
        Add New Warehouse
      </h1>

      <div className='max-w-4xl p-5 mx-auto rounded-lg shadow-lg md:p-10 bg-secondary'>
        <form onSubmit={addNewWarehouse}>
          <div className='grid gap-8 md:grid-cols-2'>
            <div className='col-span-2 md:col-span-1'>
              <h6 className='mb-3 text-lg font-medium text-gray-200 lg:text-xl md:mb-5'>
                <label>Warehouse Latitude*</label>
              </h6>
              <input
                type='number'
                required
                name='lat'
                value={newWarehouse.lat}
                onChange={newWarehouseHandler}
                className='w-full px-3 py-2 text-gray-300 rounded-md outline-none lg:text-lg bg-primary focus:ring-offset-2 ring-2 ring-primary'
              />
            </div>

            <div className='col-span-2 md:col-span-1'>
              <h6 className='mb-3 text-lg font-medium text-gray-200 lg:text-xl md:mb-5'>
                <label>Warehouse Longitude*</label>
              </h6>
              <input
                type='number'
                name='lng'
                value={newWarehouse.lng}
                onChange={newWarehouseHandler}
                required
                className='w-full px-3 py-2 text-gray-300 rounded-md outline-none lg:text-lg bg-primary focus:ring-offset-2 ring-2 ring-primary'
              />
            </div>

            <div className='col-span-2 md:col-span-1'>
              <h6 className='mb-3 text-lg font-medium text-gray-200 lg:text-xl md:mb-5'>
                <label>Status*</label>
              </h6>
              <input
                type='text'
                name='status'
                value={newWarehouse.status}
                onChange={newWarehouseHandler}
                required
                className='w-full px-3 py-2 text-gray-300 rounded-md outline-none lg:text-lg bg-primary focus:ring-offset-2 ring-2 ring-primary'
              />
            </div>

            <div className='col-span-2'>
              <h6 className='mb-3 text-lg font-medium text-gray-200 lg:text-xl md:mb-5'>
                <label>Warehouse Address*</label>
              </h6>
              <textarea
                cols='30'
                rows='3'
                name='address'
                onChange={newWarehouseHandler}
                value={newWarehouse.address}
                className='w-full px-3 py-2 text-gray-300 rounded-md outline-none lg:text-lg bg-primary focus:ring-offset-2 ring-2 ring-primary'
              ></textarea>
            </div>
          </div>

          <button
            type='submit'
            className='w-full px-8 py-2 mt-10 text-lg font-medium text-gray-900 transition-all duration-300 rounded-lg hover:text bg-cta md:text-xl hover:bg-cta-dark hover:-translate-y-3 focus:ring-2 ring-offset-2 ring-cta-dark'
          >
            Add Warehouse
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddWarehouse;

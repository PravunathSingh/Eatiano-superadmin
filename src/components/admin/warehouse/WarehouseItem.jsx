import React from 'react';
import { Link } from 'react-router-dom';

const WarehouseItem = ({ warehouse }) => {
  return (
    <div>
      <h6 className='mb-3 font-medium text-center text-gray-100 lg:text-lg'>
        {warehouse.address}
      </h6>

      <div className='flex items-center justify-between mb-4'>
        <p className='text-gray-300'>Latitude: {warehouse.lat}</p>
        <p className='text-gray-300'>Longitude: {warehouse.lng}</p>
      </div>

      <h6 className='mb-3 font-medium text-center text-gray-100 lg:text-lg'>
        {warehouse.status}
      </h6>
    </div>
  );
};

export default WarehouseItem;

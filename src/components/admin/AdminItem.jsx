import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Admin } from '../../context/adminContext';

const AdminItem = ({ admin }) => {
  const adminCtx = useContext(Admin);

  const deleteAdmin = () => {
    adminCtx.deleteAdmin(admin.id);
  };

  return (
    <div>
      <h6 className='mb-3 text-lg font-medium text-center text-gray-100 lg:text-xl'>
        {admin.name}
      </h6>

      <h6 className='mb-4 font-medium text-center text-gray-200'>
        {admin.email}
      </h6>
      <p className='mb-4 leading-relaxed text-center text-gray-200 md:mb-5'>
        {admin.phone}
      </p>

      <p className='mb-4 leading-relaxed text-center text-gray-200 md:mb-5'>
        Country: {admin.country}
      </p>

      <p className='mb-4 text-sm font-light leading-relaxed text-center text-gray-300 md:mb-5'>
        Created At: {admin.created_at}
      </p>

      <button
        className='text-brand-text hover:text-red-600'
        onClick={deleteAdmin}
      >
        <i className='fa fa-trash'></i> Delete
      </button>

      {/* <div className='flex items-center justify-around'>
        <button
          className='text-brand-text hover:text-red-600'
          onClick={deleteAdmin}
        >
          <i className='fa fa-trash'></i> Delete
        </button>

        <Link to={`/admin/warehouse/${admin.id}`}>
          <button className='text-blue-300 hover:text-blue-500'>View</button>
        </Link>
      </div> */}
    </div>
  );
};

export default AdminItem;

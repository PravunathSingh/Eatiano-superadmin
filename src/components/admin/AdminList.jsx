import React from 'react';
import AdminItem from './AdminItem';

const AdminList = ({ allAdmin }) => {
  const adminList = allAdmin.map((admin) => {
    return <AdminItem key={admin.id} admin={admin} />;
  });

  return (
    <div className='grid gap-20 my-10 md:my-16 lg:my-28 lg:grid-cols-4 md:grid-cols-3 place-content-center place-items-center'>
      {adminList}
    </div>
  );
};

export default AdminList;

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Coupons } from '../../context/couponContext';

const CouponItem = ({ couponData }) => {
  const couponsCtx = useContext(Coupons);

  const deleteCoupon = () => {
    couponsCtx.deleteCoupon(couponData.coupon_id);
  };

  return (
    <div>
      <h6 className='mb-3 font-medium text-center text-gray-100 lg:text-lg'>
        {couponData.coupon_code}
      </h6>
      <h6 className='mb-4 font-medium text-center text-gray-200'>
        Discount: {couponData.discount} %
      </h6>
      <p className='mb-4 text-sm font-light leading-relaxed text-center text-gray-300 md:mb-5'>
        Coupon Applies When Order Amount is {couponData.condition} Rupees
      </p>

      <div className='flex items-center justify-around mt-5'>
        <Link
          to={`/editCoupon/${couponData.coupon_id}`}
          className='text-border hover:text-brand-text'
        >
          Edit
        </Link>

        <button
          className='text-brand-text hover:text-red-600'
          onClick={deleteCoupon}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default CouponItem;

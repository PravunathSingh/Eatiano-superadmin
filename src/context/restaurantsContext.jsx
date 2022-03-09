import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const Restaurants = createContext({
  allRestaurants: [],
});

const RestaurantsProvider = ({ children }) => {
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    const getAllRestaurants = async () => {
      const response = await axios.get(
        'https://achievexsolutions.in/current_work/eatiano/api/super_admin/all_restaurant'
      );

      const resData = await response.data;
      console.log(resData.data);
      setAllRestaurants(resData.data);
    };

    getAllRestaurants();
  }, []);

  const restaurantCtx = {
    allRestaurants: allRestaurants,
  };

  return (
    <Restaurants.Provider value={restaurantCtx}>
      {children}
    </Restaurants.Provider>
  );
};

export default RestaurantsProvider;

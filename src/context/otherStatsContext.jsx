import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Auth } from './authContext';

export const OtherStats = createContext({
  monthlySale: '',
  revenue: '',
  profitRange: '',
});

const OtherStatsProvider = ({ children }) => {
  const [monthlySale, setMonthlySale] = useState('');
  const [revenue, setRevenue] = useState('');
  const [profitRange, setProfitRange] = useState('');
  const authCtx = useContext(Auth);
  const token = authCtx.token;

  // useEffect(() => {
  //   const getMonthlySale = async () => {
  //     const config = {
  //       headers: {
  //         Accept: 'application/json',
  //         Authorization: `Bearer ${token}`,
  //       },
  //     };

  //     const today = new Date().toISOString().slice(0, 10);

  //     const res = await axios.get(
  //       `https://achievexsolutions.in/current_work/eatiano/api/super_admin/monthly_sell/${today}`,
  //       config
  //     );

  //     const resData = res.data.data;
  //     console.log(resData);
  //     setMonthlySale(resData);
  //   };

  //   getMonthlySale();
  // }, []);

  const otherStatsValue = {
    monthlySale: monthlySale,
    revenue: revenue,
    profitRange: profitRange,
  };

  return (
    <OtherStats.Provider value={otherStatsValue}>
      {children}
    </OtherStats.Provider>
  );
};

export default OtherStatsProvider;

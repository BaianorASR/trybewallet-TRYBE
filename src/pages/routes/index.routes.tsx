import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from '../Login';
import Wallet from '../Wallet';

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/carteira' element={<Wallet />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;

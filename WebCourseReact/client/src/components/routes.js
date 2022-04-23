import React from 'react';
import { Routes, Route } from 'react-router-dom'
import SingIn from './SingIn';
import NotFound from './NotFound';
import MakeOrder from './MakeOrder';
import Main from '../compsPage/Main';
import ClientRoom from '../rooms/user/ClientRoom';
import SingUp from './SingUp';
import AdminRoom from '../rooms/admin/AdminRoom';
import MasterRoom from "../rooms/master/MasterRoom";

export const useRoutes = (isAuth) => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/auth/login" element={<SingIn/>} />
      <Route path="/auth/registr" element={<SingUp/>} />
      <Route path="/order" element={<MakeOrder/>} />
      <Route path="/client-room" element={<ClientRoom/>} />
      <Route path="/admin-room" element={<AdminRoom/>} />
      <Route path="/master-room" element={<MasterRoom/>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
};
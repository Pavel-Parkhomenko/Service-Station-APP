import React from 'react';
import { Routes, Route } from 'react-router-dom'
import App from '../App'
import Authentication from './SingUp';
import NotFound from './NotFound';
import MakeOrder from './MakeOrder';
import Main from '../compsPage/Main';
import ClientRoom from '../rooms/ClientRoom';

export const useRoutes = (isAuth) => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/auth" element={<Authentication/>} />
      <Route path="/order" element={<MakeOrder/>} />
      <Route path="/client-room" element={<ClientRoom/>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
};
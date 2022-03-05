import React from 'react';
import { Routes, Route } from 'react-router-dom'
import App from '../App'
import Authentication from './SingUp';
import NotFound from './NotFound';
import MakeOrder from './MakeOrder';
import Main from '../compsPage/Main';

export const useRoutes = (isAuth) => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/auth" element={<Authentication open='true' />} />
      <Route path="/order" element={<MakeOrder open="true" />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
};
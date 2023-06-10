import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QuickLink from './pages/QuickLink';
import UserLogin from './pages/UserLogin';
import UserSignup from './pages/UserSignup';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<QuickLink />} />
        <Route exact path='/login' element={<UserLogin />} />
        <Route exact path='/signup' element={<UserSignup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import useAuthCheck from './hooks/useAuthCheck';
import QuickLink from './pages/QuickLink';
import UserKYC from './pages/UserKYC';
import UserLogin from './pages/UserLogin';
import UserSignup from './pages/UserSignup';

const App = () => {
  const authChecked = useAuthCheck();
  return !authChecked ? (
    // <Spinner size={'xl'}></Spinner>
    <div />
  ) : (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<QuickLink />} />
        <Route exact path='/login' element={<UserLogin />} />
        <Route exact path='/signup' element={<UserSignup />} />
        <Route exact path='/kyc' element={<UserKYC />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

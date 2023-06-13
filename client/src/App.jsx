import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SetRole from './components/common/SetRole';
import UserPrivateRoute from './components/common/UserPrivateRoute';
import useAuthCheck from './hooks/useAuthCheck';
import useRoleCheck from './hooks/useRoleCheck';
import QuickLink from './pages/QuickLink';
import UserKYC from './pages/UserKYC';
import UserLogin from './pages/UserLogin';
import UserSignup from './pages/UserSignup';

const App = () => {
  const authChecked = useAuthCheck();
  if (!authChecked) {
    return <div />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<QuickLink />} />
        <Route exact path='/login' element={<UserLogin />} />
        <Route exact path='/setrole' element={<SetRole />} />
        <Route exact path='/signup' element={<UserSignup />} />

        <Route
          exact
          path='/kyc'
          element={
            <UserPrivateRoute>
              <UserKYC />
            </UserPrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

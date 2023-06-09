import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BankPrivateRoute from './components/common/BankPrivateRoute';
import SetRole from './components/common/SetRole';
import UserPrivateRoute from './components/common/UserPrivateRoute';
import useAuthCheck from './hooks/useAuthCheck';
import useRoleCheck from './hooks/useRoleCheck';
import BankDashboard from './pages/BankDashboard';
import BankForm from './pages/BankForm';
import BankPending from './pages/BankPending';
import UserKYC from './pages/UserKYC';
import UserLogin from './pages/UserLogin';
import UserSignup from './pages/UserSignup';
import LandingPage from './pages/LandingPage';
import DocumentUploader from './components/documentUploader/DocumentUploader';
import CustomerPending from './pages/CustomerPending';
import AdminPrivateRoute from './components/common/AdminPrivateRoute';
import AdminDashboard from './pages/AdminDashboard';
import Unauthorised from './components/common/Unauthorised';
import UserKYCThree from './pages/UserKYCThree';
import UserKYCTwo from './pages/UserKYCTwo';

const App = () => {
  const authChecked = useAuthCheck();
  if (!authChecked) {
    return <div />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route exact path='/login' element={<UserLogin />} />
        <Route exact path='/setrole' element={<SetRole />} />
        <Route exact path='/signup' element={<UserSignup />} />
        <Route
          exact
          path='/works-kyc'
          element={
            <UserPrivateRoute>
              <UserKYCTwo />
            </UserPrivateRoute>
          }
        />
        <Route
          exact
          path='/assets-kyc'
          element={
            <UserPrivateRoute>
              <UserKYCThree />
            </UserPrivateRoute>
          }
        />
        <Route
          exact
          path='/user-kyc'
          element={
            <UserPrivateRoute>
              <UserKYC />
            </UserPrivateRoute>
          }
        />
        <Route
          exact
          path='/kyc-submitted'
          element={
            <UserPrivateRoute>
              <CustomerPending />
            </UserPrivateRoute>
          }
        />
        <Route
          exact
          path='/bank-form'
          element={
            <BankPrivateRoute>
              <BankForm />
            </BankPrivateRoute>
          }
        />
        <Route
          exact
          path='/pending-request'
          element={
            <BankPrivateRoute>
              <BankPending />
            </BankPrivateRoute>
          }
        />
        <Route
          exact
          path='/bank-dashboard'
          element={
            <BankPrivateRoute>
              <BankDashboard />
            </BankPrivateRoute>
          }
        />
        <Route
          exact
          path='/admin-dashboard'
          element={
            <AdminPrivateRoute>
              <AdminDashboard />
            </AdminPrivateRoute>
          }
        />
        <Route exact path='/upload_documents' element={<DocumentUploader />} />
        <Route exact path='/unauthorised' element={<Unauthorised />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

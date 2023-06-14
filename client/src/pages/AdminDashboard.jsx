import React from 'react';
import BankAccountTab from '../components/AdminDashboard/BankAccountTab';
import Layout from '../components/common/Layout';

const AdminDashboard = () => {
  return (
    <Layout>
      <h1>Admin Dashboard</h1>
      <BankAccountTab />
    </Layout>
  );
};

export default AdminDashboard;

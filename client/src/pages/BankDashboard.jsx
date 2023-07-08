import React from 'react';
import CustomerTable from '../components/BankDashboard/CustomerTable';
import Layout from '../components/common/Layout';

const BankDashboard = () => {
  return (
    <Layout>
      <CustomerTable />
    </Layout>
  );
};

export default BankDashboard;

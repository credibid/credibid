import React, { useState } from 'react';
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '@chakra-ui/react';

function BankAccountTab() {
  const [bankAccounts, setBankAccounts] = useState([
    { id: 1, name: 'Bank A', status: 'Pending' },
    { id: 2, name: 'Bank B', status: 'Active' },
    // Add more bank account data as needed
  ]);

  const [selectedIds, setSelectedIds] = useState([]);

  const handleRowClick = (accountId) => {
    if (selectedIds.includes(accountId)) {
      setSelectedIds((prevSelectedIds) =>
        prevSelectedIds.filter((id) => id !== accountId)
      );
    } else {
      setSelectedIds((prevSelectedIds) => [...prevSelectedIds, accountId]);
    }
  };

  const handleStatusChange = () => {
    const updatedBankAccounts = bankAccounts.map((account) => {
      if (selectedIds.includes(account.id)) {
        return { ...account, status: 'Active' };
      }
      return account;
    });
    setBankAccounts(updatedBankAccounts);
  };

  return (
    <TabPanel>
      <h2>Bank Accounts</h2>
      <Table variant='simple'>
        <Thead>
          <Tr>
            <Th>Select</Th>
            <Th>Bank Name</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          {bankAccounts.map((account) => (
            <Tr
              key={account.id}
              onClick={() => handleRowClick(account.id)}
              backgroundColor={
                selectedIds.includes(account.id) ? 'lightblue' : 'white'
              }
              _hover={{ cursor: 'pointer', backgroundColor: 'gray.100' }}>
              <Td>
                {selectedIds.includes(account.id) ? 'Selected' : 'Not Selected'}
              </Td>
              <Td>{account.name}</Td>
              <Td>{account.status}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <button onClick={handleStatusChange} disabled={selectedIds.length === 0}>
        Change Status to Active
      </button>
    </TabPanel>
  );
}

function CustomerTab() {
  return (
    <TabPanel>
      <h2>Customer</h2>
      <p>Text content for the Customer tab goes here.</p>
    </TabPanel>
  );
}

function AdminDashboard() {
  return (
    <Tabs isFitted variant='enclosed'>
      <TabList mb='1em'>
        <Tab>Bank Account</Tab>
        <Tab>Customer</Tab>
      </TabList>
      <TabPanels>
        <BankAccountTab />
        <CustomerTab />
      </TabPanels>
    </Tabs>
  );
}

export default AdminDashboard;

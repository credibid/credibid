import React, { useState } from 'react';
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Stack,
} from '@chakra-ui/react';
import { useAllBanksQuery } from '../../features/admin/admin';

import AdminCustomerTab from './AdminCustomerTab';
import AdminBankTab from './AdminBankTab';

function CustomerTab() {
  return (
    <TabPanel>
      <AdminCustomerTab />
    </TabPanel>
  );
}
function BankTab() {
  return (
    <TabPanel>
      <AdminBankTab />
    </TabPanel>
  );
}

function AdminDashboard() {
  return (
    <Stack m={{ base: 0, md: '0 5em' }}>
      <Tabs isFitted variant='enclosed' colorScheme={'blue'} mt={2}>
        <TabList mb='1em'>
          <Tab _selected={{ color: 'white', bg: 'blue.500' }}>
            Bank Accounts
          </Tab>
          <Tab _selected={{ color: 'white', bg: 'green.500' }}>
            Customer KYCs
          </Tab>
        </TabList>
        <TabPanels>
          <BankTab />
          <CustomerTab />
        </TabPanels>
      </Tabs>
    </Stack>
  );
}

export default AdminDashboard;

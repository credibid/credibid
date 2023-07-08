import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Input,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Stack,
  HStack,
  Select,
  useToast,
} from '@chakra-ui/react';
import { useGetCustomersQuery } from '../../features/bank/bankApi';
import CustomerDetails from '../CustomerDetails/CustomerDetails';
import {
  useAllBanksQuery,
  useChangeUserStatusMutation,
} from '../../features/admin/admin';
import { CheckIcon } from '@chakra-ui/icons';

const BankRow = ({ bank, onUpdateStatus }) => {
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [showTickButton, setShowTickButton] = useState(false);
  const [bankStatus, setBankStatus] = useState(bank.userId.status);

  useEffect(() => {
    setBankStatus(bank.userId.status);
  }, [bank.userId.status]);

  const handleStatusChange = (e) => {
    setBankStatus(e.target.value);
    setSelectedStatus(e.target.value);
    setShowTickButton(true);
  };

  const handleUpdateStatus = () => {
    onUpdateStatus(bank.userId._id, selectedStatus);

    setShowTickButton(false);
    setSelectedStatus(null);
  };

  return (
    <Tr>
      <Td>{bank.bankName}</Td>
      <Td>{bank.routingNumber}</Td>
      <Td>{bank.userId.email_address}</Td>
      <Td>
        <HStack align={'baseline'}>
          <Select
            colorScheme={'blue'}
            borderColor={'blue.400'}
            bg={bankStatus === 'active' ? 'green.200' : 'yellow.100'}
            value={bankStatus}
            width='150px'
            marginBottom='1em'
            onChange={handleStatusChange}>
            <option value='active'>Active</option>
            <option value='pending'>Pending</option>
          </Select>
          {showTickButton && (
            <Button
              rounded={'full'}
              colorScheme='blue'
              size='sm'
              ml={2}
              onClick={handleUpdateStatus}>
              Update
            </Button>
          )}
          {!showTickButton && (
            <Button
              visibility={'hidden'}
              rounded={'full'}
              colorScheme='blue'
              size='sm'
              ml={2}
              onClick={handleUpdateStatus}>
              Select
            </Button>
          )}
        </HStack>
      </Td>
    </Tr>
  );
};

const AdminBankTab = ({ banks }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const toast = useToast();
  const {
    data: bankAccounts,
    isLoading,
    isError,
    error,
    isSuccess,
    refetch,
  } = useAllBanksQuery();
  console.log(bankAccounts);
  const [changeStatus, { isLoading: isUpdating, isSuccess: isUpdateSuccess }] =
    useChangeUserStatusMutation();
  useEffect(() => {
    if (isSuccess) {
      setData(bankAccounts);
    }
  }, [isSuccess]);

  const itemsPerPage = 5;

  const filteredData = data.filter(
    (item) =>
      item.bankName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.routingNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.userId.email_address
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      item.userId.status.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const pageCount = Math.ceil(filteredData.length / itemsPerPage);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  const handleUpdateStatus = (bankId, status) => {
    const data = {
      id: bankId,
      status: status,
    };
    console.log(data);
    changeStatus(data);
  };
  useEffect(() => {
    if (isUpdateSuccess) {
      toast({
        title: 'Status Updated',
        description: 'Bank status has been updated',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    }
    refetch();
  }, [isUpdateSuccess]);
  useEffect(() => {
    if (isError) {
      toast({
        title: 'Error',
        // description: error.message,
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  }, [isError]);
  useEffect(() => {
    if (isUpdating) {
      toast({
        title: 'Updating',
        description: 'Updating user status',
        status: 'info',
        duration: 3000,
        isClosable: true,
      });
    }
  }, [isUpdating]);

  const getPaginatedData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredData.slice(startIndex, endIndex);
  };

  return (
    <Box display={'flex'} flexDir={'column'}>
      <Box alignSelf={'flex-end'}>
        <Input
          placeholder='Search...'
          value={searchQuery}
          onChange={handleSearch}
          mb={4}
          w='300px'
          variant={'filled'}
        />
      </Box>

      <Table variant='striped'>
        <Thead>
          <Tr>
            <Th>Bank Name</Th>
            <Th>Routing Name</Th>
            <Th>Applicant Email</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {getPaginatedData().map((bank, index) => (
            <BankRow
              key={index}
              bank={bank}
              onUpdateStatus={handleUpdateStatus}
            />
          ))}
        </Tbody>
      </Table>

      {pageCount > 1 && (
        <Box mt={4}>
          {Array.from({ length: pageCount }, (_, index) => (
            <Button
              key={index}
              size='sm'
              colorScheme={currentPage === index + 1 ? 'blue' : 'gray'}
              onClick={() => handleChangePage(index + 1)}
              mx={1}>
              {index + 1}
            </Button>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default AdminBankTab;

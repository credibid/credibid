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
} from '@chakra-ui/react';
import { useGetCustomersQuery } from '../../features/bank/bankApi';
import CustomerDetails from '../BankDashboard/CustomerDetails';
import { useAllCustomersQuery } from '../../features/admin/admin';
import { DeleteIcon, ViewIcon } from '@chakra-ui/icons';

const AdminCustomerTab = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [customer, setCustomer] = useState({});

  const {
    data: customers,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useAllCustomersQuery();
  useEffect(() => {
    if (isSuccess) {
      setData(customers);
    }
  }, [isSuccess]);

  const itemsPerPage = 5;

  const filteredData = data.filter(
    (item) =>
      item.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.celular.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.profession.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const pageCount = Math.ceil(filteredData.length / itemsPerPage);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  const getPaginatedData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredData.slice(startIndex, endIndex);
  };
  const handleViewDetails = (customer) => {
    console.log(customer);
    setCustomer(customer);
    onOpen();
  };

  const handlePrint = () => {
    const tableElements = document.querySelectorAll('.printable-table');
    tableElements.forEach((element) => {
      element.style.display = 'table';
    });

    window.print(tableElements);

    tableElements.forEach((element) => {
      element.style.display = 'none';
    });
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
            <Th>Full Name</Th>
            <Th>Phone Number</Th>
            <Th>Profession</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {getPaginatedData().map((contact, index) => (
            <Tr key={index}>
              <Td>
                {contact.firstName} {contact.lastName}
              </Td>
              <Td>{contact.celular}</Td>
              <Td>{contact.profession}</Td>
              <Td>
                <HStack>
                  <Button
                    colorScheme='blue'
                    size='sm'
                    onClick={() => handleViewDetails(contact)}>
                    <ViewIcon />
                  </Button>
                  <Button
                    colorScheme='red'
                    size='sm'
                    onClick={() => handleViewDetails(contact)}>
                    <DeleteIcon />
                  </Button>
                </HStack>
              </Td>
            </Tr>
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

      <Modal isOpen={isOpen} onClose={onClose} size={'4xl'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <CustomerDetails userData={customer} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default AdminCustomerTab;

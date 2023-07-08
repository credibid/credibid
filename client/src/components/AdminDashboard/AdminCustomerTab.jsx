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
  HStack,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import {
  useAllCustomersQuery,
  useDeleteCustomerMutation,
} from '../../features/admin/admin';
import { DeleteIcon, ViewIcon } from '@chakra-ui/icons';
import CustomerDetails from '../CustomerDetails/CustomerDetails';

const AdminCustomerTab = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [customer, setCustomer] = useState({});
  const [deleteCustomerId, setDeleteCustomerId] = useState(null);
  const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] =
    useState(false);
  const cancelRef = React.useRef();
  const toast = useToast();
  const {
    data: customers,
    isLoading,
    isError,
    error,
    isSuccess,
    refetch,
  } = useAllCustomersQuery();

  const [deleteCustomer, { isSuccess: isDeleteSuccess }] =
    useDeleteCustomerMutation();

  useEffect(() => {
    if (isSuccess) {
      setData(customers);
    }
  }, [customers, isSuccess]);

  useEffect(() => {
    if (isDeleteSuccess) {
      toast({
        title: 'Customer deleted successfully',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      refetch();
    }
  }, [isDeleteSuccess]);

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
    setCustomer(customer);
    onOpen();
  };

  const handleDelete = (id) => {
    console.log(id);
    setDeleteCustomerId(id);
    setIsDeleteConfirmationOpen(true);
  };

  const handleConfirmDelete = () => {
    deleteCustomer(deleteCustomerId);
    console.log('Deleting customer with ID:', deleteCustomerId);
    setIsDeleteConfirmationOpen(false);
  };

  const handleCancelDelete = () => {
    setIsDeleteConfirmationOpen(false);
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
                    onClick={() => handleDelete(contact._id)}>
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

      <AlertDialog
        isOpen={isDeleteConfirmationOpen}
        leastDestructiveRef={cancelRef}
        onClose={handleCancelDelete}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Delete Customer
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={handleCancelDelete}>
                Cancel
              </Button>
              <Button colorScheme='red' onClick={handleConfirmDelete} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>

      <Modal isOpen={isOpen} onClose={onClose} size={'4xl'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{customer.firstName}'s Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <CustomerDetails userId={customer.userId} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default AdminCustomerTab;

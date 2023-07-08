import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Image,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import bankSvg from '../assets/bank.svg';
import Layout from '../components/common/Layout';
import Loader from '../components/common/Spinner';
import {
  useBankDataQuery,
  useCreateBankMutation,
} from '../features/bank/bankApi';
const BankForm = () => {
  const [bankName, setBankName] = useState('');
  const [spinning, setSpinning] = useState(true);
  const [routingNumber, setRoutingNumber] = useState('');
  const navigate = useNavigate();
  const { status } = useSelector((state) => state.auth);
  const [createBank, { data, loading, error, isSuccess }] =
    useCreateBankMutation();
  const {
    data: bankData,
    isSuccess: bankSuccess,
    error: bankError,
    loading: bankLoading,
  } = useBankDataQuery();
  const handleSubmit = () => {
    const data = {
      bankName,
      routingNumber,
    };
    createBank(data);
  };
  useEffect(() => {
    if (isSuccess && status === 'pending') {
      navigate('/pending-request');
    }
  }, [isSuccess]);
  useEffect(() => {
    if (bankError) {
      setSpinning(false);
    }
  }, [bankError]);

  useEffect(() => {
    if (bankSuccess && status === 'pending') {
      navigate('/pending-request');
    } else if (bankSuccess && status === 'active') {
      navigate('/bank-dashboard');
    }
  }, [bankSuccess]);

  return (
    <>
      {spinning ? (
        <Loader />
      ) : (
        <Layout>
          <HStack h={'100vh'}>
            <VStack
              display={{ base: 'none', md: 'flex' }}
              h={'full'}
              p={10}
              spacing={10}
              justify='center'
              bgColor={'blue.100'}
              w={'50vw'}>
              <Image src={bankSvg} alt='login' width={'40vw'} />
            </VStack>

            <VStack>
              <Box w={{ base: '100vw', md: '50vw' }} p={10} align='center'>
                <Text fontSize='3xl' fontWeight='bold' mb={5}>
                  Your Bank Information
                </Text>
                <VStack w={{ base: '80vw', md: '25vw' }} spacing={5}>
                  <FormControl id='bankName' isRequired>
                    <FormLabel>Bank Name</FormLabel>
                    <Input
                      type='text'
                      value={bankName}
                      onChange={(e) => setBankName(e.target.value)}
                      variant='filled'
                    />
                  </FormControl>
                  <FormControl id='routingNumber' isRequired>
                    <FormLabel>Routing Number</FormLabel>
                    <Input
                      type='text'
                      value={routingNumber}
                      onChange={(e) => setRoutingNumber(e.target.value)}
                      variant='filled'
                    />
                  </FormControl>
                  <Button
                    onClick={handleSubmit}
                    colorScheme='blue'
                    width={'full'}>
                    Submit
                  </Button>
                </VStack>
              </Box>
            </VStack>
          </HStack>
        </Layout>
      )}
    </>
  );
};

export default BankForm;

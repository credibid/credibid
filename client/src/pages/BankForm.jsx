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
import bankSvg from '../assets/bank.svg';
import { useCreateBankMutation } from '../features/bank/userApi';
const BankForm = () => {
  const [bankName, setBankName] = useState('');
  const [routingNumber, setRoutingNumber] = useState('');
  const [createBank, { data, loading, error, isSuccess }] =
    useCreateBankMutation();
  const handleSubmit = () => {
    const data = {
      bankName,
      routingNumber,
    };
    createBank(data);
    console.log(data);
  };
  useEffect(() => {
    if (isSuccess) {
      console.log(data);
    }
  }, [isSuccess]);

  return (
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
            <Button onClick={handleSubmit} colorScheme='blue' width={'full'}>
              Submit
            </Button>
          </VStack>
        </Box>
      </VStack>
    </HStack>
  );
};

export default BankForm;

import { VStack, Image, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import pendingSvg from '../assets/pending.svg';

const BankPending = () => {
  const navigate = useNavigate();
  const { status } = useSelector((state) => state?.auth) || {};
  useEffect(() => {
    if (status === 'active') navigate('/bank-dashboard');
  }, [status]);

  return (
    <VStack
      display={{ md: 'flex' }}
      h={'100vh'}
      p={10}
      spacing={10}
      justify='center'
      // bgColor={'blue.100'}
      w={'100vw'}>
      <Image src={pendingSvg} alt='login' width={'20vw'} />
      <Text fontSize='3xl' fontWeight='bold' mb={5}>
        Your bank needs to be verified.
        <br /> Please wait for the confirmation!
      </Text>
    </VStack>
  );
};

export default BankPending;

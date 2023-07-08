import React from 'react';
import { Button, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const QuickLink = () => {
  const navigate = useNavigate();

  return (
    <VStack mt={10}>
      <Button
        colorScheme='green'
        variant={'outline'}
        onClick={() => {
          navigate('/signup');
        }}>
        User Registration
      </Button>
      <Button
        colorScheme='blue'
        variant={'outline'}
        onClick={() => {
          navigate('/login');
        }}>
        User / Bank / Admin Login
      </Button>
      <Button
        colorScheme='purple'
        variant={'outline'}
        onClick={() => {
          navigate('/kyc');
        }}>
        User KYC Form
      </Button>
      <Button colorScheme='facebook' variant={'outline'}>
        Bank Registration
      </Button>
    </VStack>
  );
};

export default QuickLink;

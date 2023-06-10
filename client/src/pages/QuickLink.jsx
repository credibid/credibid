import React from 'react';
import { Button, VStack } from '@chakra-ui/react';

const QuickLink = () => {
  return (
    <VStack mt={10}>
      <Button colorScheme='blue' variant={'outline'}>
        User Registration
      </Button>
      <Button colorScheme='blue' variant={'outline'}>
        User / Bank / Admin Login
      </Button>
      <Button colorScheme='blue' variant={'outline'}>
        User KYC Form
      </Button>
      <Button colorScheme='whatsapp' variant={'outline'}>
        Bank Registration
      </Button>
      <Button colorScheme='whatsapp' variant={'outline'}>
        Bank Login
      </Button>
    </VStack>
  );
};

export default QuickLink;

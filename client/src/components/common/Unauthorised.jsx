import { VStack, Image, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import fourzerofourSvg from '../../assets/fourzerofour.svg';
import Layout from './Layout';

const Unauthorised = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <VStack
        display={{ md: 'flex' }}
        h={'90vh'}
        p={10}
        spacing={10}
        justify='center'
        // bgColor={'blue.100'}
        w={'100vw'}>
        <Image src={fourzerofourSvg} alt='login' width={'20vw'} />
        <Text fontSize='3xl' fontWeight='bold' mb={5}>
          You're not authorised to view this page.
        </Text>
      </VStack>
    </Layout>
  );
};

export default Unauthorised;

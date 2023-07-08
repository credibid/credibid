import { VStack, Image, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import pendingSvg from '../assets/pending.svg';
import Layout from '../components/common/Layout';

const CustomerPending = () => {
  const navigate = useNavigate();
  // const { status } = useSelector((state) => state?.auth) || {};
  // useEffect(() => {
  //   if (status === 'active') navigate('/bank-dashboard');
  // }, [status]);

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
        <Image src={pendingSvg} alt='login' width={'20vw'} />
        <Text fontSize='3xl' fontWeight='bold' mb={5}>
          KYC Form Submitted.
          <br /> We will get back to you soon!
        </Text>
      </VStack>
    </Layout>
  );
};

export default CustomerPending;

import React, { useEffect, useState } from 'react';
import { Button, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const QuickLink = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log('first load');
    const getUser = () => {
      fetch(`${import.meta.env.VITE_SERVER_URL}/auth/login/success`, {
        method: 'GET',
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Credentials': true,
        },
      })
        .then((response) => {
          console.log('response', response);
          if (response.status === 200) return response.json();
          throw new Error('authentication has been failed!');
        })
        .then((resObject) => {
          console.log('resObject', resObject);
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

  console.log(user);

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

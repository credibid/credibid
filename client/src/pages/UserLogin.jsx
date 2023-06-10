import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Image,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import loginSvg from '../assets/login.svg';
import { FcGoogle } from 'react-icons/fc';
import MetaIcon from '../components/customIcons/MetaIcon';

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };
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
        <Image src={loginSvg} alt='login' width={'40vw'} />
      </VStack>

      <VStack>
        <Box w={{ base: '100vw', md: '50vw' }} p={10} align='center'>
          <Text fontSize='3xl' fontWeight='bold' mb={5}>
            User Login
          </Text>
          <form onSubmit={handleSubmit}>
            <VStack w={{ base: '80vw', md: '25vw' }} spacing={5}>
              <FormControl id='email' isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  type='email'
                  value={email}
                  onChange={handleEmailChange}
                  variant='filled'
                />
              </FormControl>
              <FormControl id='password' isRequired>
                <FormLabel>Password</FormLabel>
                <Input
                  type='password'
                  value={password}
                  onChange={handlePasswordChange}
                  variant='filled'
                />
              </FormControl>
              <Button type='submit' colorScheme='blue' width={'full'}>
                Sign In
              </Button>
              <Button
                leftIcon={<FcGoogle size={20} />}
                type='submit'
                colorScheme='gray'
                width={'full'}>
                Sign in with Google
              </Button>
              <Button
                leftIcon={<MetaIcon size={22} />}
                type='submit'
                colorScheme='gray'
                width={'full'}>
                Sign in with Meta
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </HStack>
  );
};

export default UserLogin;

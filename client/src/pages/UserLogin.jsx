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
import React, { useState } from 'react';
import loginSvg from '../assets/login.svg';
import { FcGoogle } from 'react-icons/fc';
import MetaIcon from '../components/customIcons/MetaIcon';
import {
  useLoginMutation,
  useThirdPartyLoginMutation,
} from '../features/auth/authApi';
const link = import.meta.env.VITE_SERVER_URL;
console.log(link);
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const [login, { data, isLoading, isError, error, isSuccess }] =
    useLoginMutation();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    login({ email, password });
  };

  const [
    thirdPartyLogin,
    {
      data: thirdPartyData,
      error: thirdPartyError,
      isSuccess: thirdPartySuccess,
    },
  ] = useThirdPartyLoginMutation();
  console.log(data, error);
  const handleGoogleLogin = () => {
    window.open(`${link}/auth/google`, '_self');
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
                colorScheme='gray'
                width={'full'}
                onClick={handleGoogleLogin}>
                Sign in with Google
              </Button>
              <Button
                leftIcon={<MetaIcon size={22} />}
                type='submit'
                colorScheme='gray'
                width={'full'}>
                Sign in with Meta
              </Button>

              <GoogleOAuthProvider clientId='211149816915-592u5vukc6nrfk5bk0vphpimu6cmvtf0.apps.googleusercontent.com'>
                <GoogleLogin
                  size='large'
                  theme='outline'
                  useOneTap
                  onSuccess={(credentialResponse) => {
                    const token = credentialResponse.credential;
                    // const decode = jwt_decode(token);
                    // const user = {
                    //   name: decode.given_name,
                    //   email: decode.email,
                    //   role: 'hr',
                    //   githubUsername: 'hr-dummy-github',
                    // };
                    thirdPartyLogin({ token });
                  }}
                  onError={() => {
                    console.log('Login Failed');
                  }}
                  // type={'icon'}
                />
              </GoogleOAuthProvider>
              {/* asdasf */}
            </VStack>
          </form>
        </Box>
      </VStack>
    </HStack>
  );
};

export default UserLogin;

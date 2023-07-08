import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Image,
  Input,
  IconButton,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
  useToast,
} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import signupSvg from '../assets/signup.svg';
import { FcGoogle } from 'react-icons/fc';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import MetaIcon from '../components/customIcons/MetaIcon';
import {
  useRegisterMutation,
  useThirdPartyLoginMutation,
} from '../features/auth/authApi';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

const UserSignup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [
    thirdPartyLogin,
    {
      data: thirdPartyData,
      error: thirdPartyError,
      isSuccess: thirdPartySuccess,
    },
  ] = useThirdPartyLoginMutation();
  const [signup, { data, isLoading, isError, error, isSuccess }] =
    useRegisterMutation();

  const toast = useToast();
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setPasswordError(true);
      toast({
        title: "Passwords doesn't match",
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setPasswordError(false);

    const data = {
      email_address: email,
      password: password,
    };
    signup(data);
  };

  useEffect(() => {
    if (isError) {
      toast({
        title: 'Signup failed.',
        description: error?.data?.error || 'Unknown error',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
    if (isSuccess) {
      toast({
        title: 'Account created.',
        description: 'We have created your account for you.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      navigate('/login');
    }
  }, [isError, isSuccess]);

  useEffect(() => {
    if (thirdPartySuccess) {
      toast({
        title: 'Account created.',
        description: 'We have created your account for you.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      navigate('/setrole');
    }
  }, [thirdPartySuccess]);

  return (
    <HStack h={'100vh'}>
      <VStack
        display={{ base: 'none', md: 'flex' }}
        h={'full'}
        p={10}
        spacing={10}
        justify='center'
        bgColor={'blue.50'}
        w={'50vw'}>
        <Image src={signupSvg} alt='login' width={'40vw'} />
      </VStack>

      <VStack>
        <Box w={{ base: '100vw', md: '50vw' }} p={10} align='center'>
          <Text fontSize='3xl' fontWeight='bold' mb={5}>
            Registration
          </Text>
          <form onSubmit={handleSubmit}>
            <VStack w={{ base: '80vw', md: '25vw' }} spacing={5}>
              {/* <HStack w='full'>
                <FormControl id='firstName' isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    type='text'
                    value={firstName}
                    onChange={handleFirstNameChange}
                    variant='filled'
                  />
                </FormControl>
                <FormControl id='lastName' isRequired>
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    type='text'
                    value={lastName}
                    onChange={handleLastNameChange}
                    variant='filled'
                  />
                </FormControl>
              </HStack> */}
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
                <InputGroup>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={handlePasswordChange}
                    variant={passwordError ? 'outline' : 'filled'} // Add red outline when passwords don't match
                    borderColor={passwordError ? 'red.500' : undefined}
                  />
                  <InputRightElement>
                    <IconButton
                      aria-label={
                        showPassword ? 'Hide Password' : 'Show Password'
                      }
                      icon={showPassword ? <HiEyeOff /> : <HiEye />}
                      onClick={handleShowPassword}
                      variant='ghost'
                    />
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <FormControl id='confirmPassword' isRequired>
                <FormLabel>Confirm Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    variant={passwordError ? 'outline' : 'filled'} // Add red outline when passwords don't match
                    borderColor={passwordError ? 'red.500' : undefined}
                  />
                  <InputRightElement>
                    <IconButton
                      aria-label={
                        showConfirmPassword ? 'Hide Password' : 'Show Password'
                      }
                      icon={showConfirmPassword ? <HiEyeOff /> : <HiEye />}
                      onClick={handleShowConfirmPassword}
                      variant='ghost'
                    />
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              {/* {passwordError && (
                <Text color='red.500' textAlign={'left'}>
                  Password doesn't match.
                </Text>
              )} */}
              <Button type='submit' colorScheme='blue' width={'full'}>
                Sign Up
              </Button>
              <Text>or</Text>
              <GoogleOAuthProvider clientId='211149816915-592u5vukc6nrfk5bk0vphpimu6cmvtf0.apps.googleusercontent.com'>
                <GoogleLogin
                  size='100px'
                  theme='outline'
                  shape='square'
                  width='100vw'
                  // useOneTap
                  onSuccess={(credentialResponse) => {
                    const token = credentialResponse.credential;

                    thirdPartyLogin({ token });
                  }}
                  onError={() => {
                    console.log('Login Failed');
                  }}
                  // type={'icon'}
                />
              </GoogleOAuthProvider>
            </VStack>
          </form>
        </Box>
      </VStack>
    </HStack>
  );
};

export default UserSignup;

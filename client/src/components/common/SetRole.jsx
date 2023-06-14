import { Box, Select, VStack, Text, Button } from '@chakra-ui/react';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userLoggedIn } from '../../features/auth/authSlice';
import { useSetRoleMutation } from '../../features/user/userApi';

const SetRole = () => {
  const [updateRole, { data, loading, error, isSuccess }] =
    useSetRoleMutation();
  const [role, setRole] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSetRole = (e) => {
    e.preventDefault();
    setRole(e.target[0].value);
    updateRole({ role: e.target[0].value });
  };
  useEffect(() => {
    if (isSuccess) {
      const data = JSON.parse(Cookies.get('auth'));
      Cookies.set(
        'auth',
        JSON.stringify({
          ...data,
          role: role,
        }),
        { expires: 1 } // 1 day
      );

      dispatch(
        userLoggedIn({
          ...data,
          role: role,
        })
      );
    }

    if (isSuccess && role === 'user') {
      navigate('/user-kyc');
    }
    if (isSuccess && role === 'bank') {
      navigate('/bank-form');
    }
  }, [isSuccess]);

  return (
    <VStack
      h={'100vh'}
      justify='center'
      bgGradient='linear(to-l, blue.50, blue.100)'>
      <Box
        p={20}
        shadow='xl'
        rounded={'2xl'}
        border={'4px solid'}
        borderColor={'blue.100'}
        bgGradient='linear(90deg, blue.50, white)'>
        <Text fontSize='2xl' fontWeight='bold' mb={5} align='center'>
          Register as
        </Text>
        <form onSubmit={handleSetRole}>
          <Select placeholder='Select' bgColor={'#ffffff7a'}>
            <option value='user'>Customer</option>
            <option value='bank'>Bank Manager</option>
          </Select>
          <Button w={'100%'} mt={5} colorScheme='blue' type='submit'>
            Set Role
          </Button>
        </form>
      </Box>
    </VStack>
  );
};

export default SetRole;

import { Box, Select, VStack, Text, Button } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRoleMutation } from '../../features/user/userApi';

const SetRole = () => {
  const [setRole, { data, loading, error, isSuccess }] = useSetRoleMutation();

  const navigate = useNavigate();

  const handleSetRole = (e) => {
    e.preventDefault();
    console.log(e.target[0]);
    const role = e.target[0].value;
    setRole({ role });
  };
  useEffect(() => {
    if (isSuccess) {
      navigate('/');
    }
  }, [isSuccess]);

  return (
    <VStack h={'100vh'} justify='center'>
      <Box
        p={20}
        shadow='2xl'
        rounded={'2xl'}
        border={'4px solid'}
        borderColor={'purple.100'}
        bgGradient='linear(to-r, rgba(0, 0, 255, 0.3), rgba(0, 0, 255, 0.2))'>
        <Text fontSize='2xl' fontWeight='bold' mb={5} align='center'>
          Register as
        </Text>
        <form onSubmit={handleSetRole}>
          <Select placeholder='Select' bgColor={'#ffffff7a'}>
            <option value='user'>Customer</option>
            <option value='bank'>Bank Manager</option>
          </Select>
          <Button
            w={'100%'}
            mt={2}
            bgColor={'purple.600'}
            color='white'
            type='submit'>
            Set Role
          </Button>
        </form>
      </Box>
    </VStack>
  );
};

export default SetRole;

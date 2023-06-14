import { Stack, Spinner } from '@chakra-ui/react';

const Loader = () => {
  return (
    <Stack
      height='100vh'
      width='100vw'
      alignItems='center'
      justifyContent='center'>
      <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
      />
    </Stack>
  );
};

export default Loader;

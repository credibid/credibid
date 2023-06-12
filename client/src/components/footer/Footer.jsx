import React from 'react'
import {
    Box,
    Container,
    Stack,
    Text,
    Link,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box
    mt={20}
    //   bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        fontWeight={600}
        as={Stack}
        maxW={'8xl'}
        py={5}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center'}}>
        <Stack direction={'row'} spacing={12}>
          <Link href={'#'}>INICIO</Link>
          <Link href={'#'}>QUIENE SOMOS</Link>
        </Stack>
        <Stack direction={'row'} spacing={12}>
        <Link href={'#'}>
           <FaFacebook />
         </Link>
         <Link href={'#'}>
           <FaInstagram />
         </Link>
         <Link href={'#'}>
           <FaEnvelope />
         </Link>
        </Stack>
        <Stack direction={'row'} spacing={12}>
          <Link href={'#'}>REGISTRO</Link>
          <Link href={'#'}>LOGIN</Link>
        </Stack>
        {/* <Text>© 2022 Chakra Templates. All rights reserved</Text> */}
      </Container>
    </Box>
  )
}

export default Footer
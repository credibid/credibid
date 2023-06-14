import React from 'react'
import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Link,
    Badge,
    useColorModeValue,
    Container,
    SimpleGrid
  } from '@chakra-ui/react';
  import UploaderCard from './UploaderCard';

const DocumentUploader = () => {
  return (
    <Box>
        <Container pt={50}>
            <Center>
            <Text 
            pb={10}
            fontSize={{ base: '2xl', md: '5xl' }}
            fontWeight={700}
            color={'blue.500'}
            >Sube tu informacion</Text>
            </Center>
        </Container>
        <SimpleGrid columns={4}>
        <Box>
            <UploaderCard title={'Ultimas 3 liquidacions de sueldo'} />
        </Box>
        <Box>
            <UploaderCard title={'Declaracion impuestos 2023'} />
        </Box>
        <Box>
            <UploaderCard title={'Ultimas 12 cotizaciones AFP'} />
        </Box>
        <Box>
            <UploaderCard title={'Cartola o pantallazo del saldo de inversiones'} />
        </Box>
        <Box>
            <UploaderCard title={'Certificado Matrimonio'} />
        </Box>
        <Box>
            <UploaderCard title={'Certificado antecedentes penales'} />
        </Box>
        <Box>
            <UploaderCard title={'Promesa de compra venta'} />
        </Box>
        <Box>
            <UploaderCard title={'Ultimas 3 liquidacions sueldo'} />
        </Box>
        </SimpleGrid>
    </Box>
  )
}

export default DocumentUploader
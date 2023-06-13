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
            >QUIERES SER SOCIO?</Text>
            </Center>
        </Container>
        <SimpleGrid columns={4}>
        <Box>
            <UploaderCard />
        </Box>
        <Box>
            <UploaderCard />
        </Box>
        <Box>
            <UploaderCard />
        </Box>
        <Box>
            <UploaderCard />
        </Box>
        <Box>
            <UploaderCard />
        </Box>
        <Box>
            <UploaderCard />
        </Box>
        <Box>
            <UploaderCard />
        </Box>
        <Box>
            <UploaderCard />
        </Box>
        </SimpleGrid>
    </Box>
  )
}

export default DocumentUploader
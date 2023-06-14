import React from 'react';
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
  SimpleGrid,
} from '@chakra-ui/react';
import UploaderCard from './UploaderCard';

const DocumentUploader = ({ handleNextStep, setParentObject }) => {
  const documents = [];
  //   const [documents, ]
  const handleSubmit = () => {
    handleNextStep();
    console.log(documents);
    setParentObject((prevState) => ({
      ...prevState,
      documents: documents,
    }));
  };
  const titles = [
    'Ultimas 3 liquidacions de sueldo',
    'Declaracion impuestos 2023',
    'Ultimas 12 cotizaciones AFP',
    'Cartola o pantallazo del saldo de inversiones',
    'Certificado Matrimonio',
    'Certificado antecedentes comerciales',
    'Promesa de compra venta',
    'Ultimas 3 liquidacions sueldo',
  ];
  return (
    <Box>
      <Container pt={50}>
        <Center>
          <Text
            pb={10}
            fontSize={{ base: '2xl', md: '5xl' }}
            fontWeight={700}
            color={'blue.500'}>
            Sube tu informacion
          </Text>
        </Center>
      </Container>
      <SimpleGrid columns={4}>
        {titles.map((title, i) => (
          <Box key={i}>
            <UploaderCard title={title} documents={documents} />
          </Box>
        ))}
      </SimpleGrid>
      <Button colorScheme='blue' onClick={handleSubmit} w={'full'}>
        Submit & Preview
      </Button>
    </Box>
  );
};

export default DocumentUploader;

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
    'Last 3 salary statements',
    'Tax return (present year)',
    'Last 12 AFP quotes',
    'Copy of identity card',
    'Cartola or screenshot of the investment balance',
    'Criminal record certificate',
    'Promise of sale',
    "Accredit down payment in the client's name",
    "Payment of the final property installments",
    "Incase of having previous quotes",
    "Additional information if requested"
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

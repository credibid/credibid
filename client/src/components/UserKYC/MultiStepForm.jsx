import React, { useState } from 'react';
import {
  Box,
  Stack,
  Text,
  Button,
  Collapse,
  Progress,
  useToast,
  HStack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '@chakra-ui/react';
import PersonalInfo from './PersonalInfo';
import AddressInfo from './AddressInfo';
import BasicInfo from './BasicInfo';
import { FiCheckSquare } from 'react-icons/fi';

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [parentObject, setParentObject] = useState({});
  const toast = useToast();

  const handleNextStep = () => {
    setCompletedSteps((prevCompletedSteps) => [
      ...prevCompletedSteps,
      currentStep,
    ]);
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const isStepCompleted = (stepIndex) => {
    return completedSteps.includes(stepIndex);
  };

  const steps = [
    {
      label: 'Step 1: Basic Info',
      component: (
        <BasicInfo
          handleNextStep={handleNextStep}
          setParentObject={setParentObject}
        />
      ),
    },
    {
      label: 'Step 2: Personal Info',
      component: (
        <PersonalInfo
          handleNextStep={handleNextStep}
          setParentObject={setParentObject}
        />
      ),
    },
    {
      label: 'Step 3: Address Info',
      component: (
        <AddressInfo
          handleNextStep={handleNextStep}
          setParentObject={setParentObject}
        />
      ),
    },
  ];

  const handleFormSubmit = () => {
    console.log(parentObject);

    toast({
      title: 'Success',
      description: 'Form submitted successfully!',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <HStack alignItems={'flex-start'}>
      <Stack w={'70vw'}>
        <Box p={4}>
          <Progress value={((currentStep + 1) / steps.length) * 100} mb={4} />

          <Stack spacing={4}>
            {steps.map((step, index) => (
              <Box
                key={index}
                borderWidth={1}
                borderRadius='md'
                borderColor='gray.200'>
                <Box
                  p={4}
                  display='flex'
                  alignItems='center'
                  justifyContent='space-between'
                  cursor='pointer'
                  onClick={() => setCurrentStep(index)}
                  bg={currentStep === index ? 'blue.100' : ''}>
                  <Text fontWeight='bold'>{step.label}</Text>
                  {isStepCompleted(index) && (
                    <HStack>
                      <Text color='green.500' fontWeight='bold'>
                        <FiCheckSquare size={25} />
                      </Text>
                    </HStack>
                  )}
                </Box>

                <Collapse in={currentStep === index}>
                  <Box p={4}>{step.component}</Box>
                </Collapse>
              </Box>
            ))}
          </Stack>

          {currentStep === steps.length && (
            <Box mt={4}>
              <Button colorScheme='blue' onClick={handleFormSubmit}>
                Submit
              </Button>
            </Box>
          )}
        </Box>
      </Stack>

      <Stack
        w={'30vw'}
        top={0}
        right={0}
        mt={4}
        mr={4}
        px={10}
        alignItems={'flex-start'}>
        <Box
          p={4}
          shadow={'lg'}
          rounded={'xl'}
          w={'full'}
          minH={'90vh'}
          textAlign='center'>
          <Text
            fontSize='xl'
            fontWeight='bold'
            mb={4}
            pb={2}
            borderBottom={'2px solid lightgray'}>
            Preview
          </Text>
          {Object.entries(parentObject).length > 0 && (
            <Table variant='simple' textAlign={'left'}>
              <Thead>
                <Tr>
                  <Th>Property</Th>
                  <Th>Value</Th>
                </Tr>
              </Thead>
              <Tbody>
                {Object.entries(parentObject).map(([key, value]) => (
                  <Tr key={key}>
                    <Td>
                      {key.charAt(0).toUpperCase() +
                        key.slice(1).replace(/([A-Z])/g, ' $1')}
                    </Td>
                    <Td>{value.charAt(0).toUpperCase() + value.slice(1)}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          )}
        </Box>
      </Stack>
    </HStack>
  );
};

export default MultiStepForm;

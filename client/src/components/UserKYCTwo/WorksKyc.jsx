import React, { useEffect, useState } from 'react';
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
import { FiCheckSquare } from 'react-icons/fi';
import { useWorkskycMutation } from '../../features/user/userApi';
import EmploymentBg from './EmploymentBG';
import PrevEmployment from './PrevEmployment';
import BankInfo from './BankInfo';
import PartnerData from './PartnerData';
import PartnerEmploymentBg from './PartnerEmploymentBg';
import PartnerAddress from './PartnerAddress';
import { useNavigate } from 'react-router-dom';
import Loader from '../common/Spinner';

const WorksKycComponent = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [parentObject, setParentObject] = useState({});
  const toast = useToast();
  const navigate = useNavigate();
  const [worksKyc, { data, isLoading, isError, error, isSuccess }] =
    useWorkskycMutation();
  const handleNextStep = () => {
    setCompletedSteps((prevCompletedSteps) => [
      ...prevCompletedSteps,
      currentStep,
    ]);
    setCurrentStep((prevStep) => prevStep + 1);
    console.log(parentObject);
  };

  const handleStepClick = (index) => {
    if (currentStep === index) {
      setCurrentStep(-1);
    } else {
      setCurrentStep(index);
    }
  };

  const isStepCompleted = (stepIndex) => {
    return completedSteps.includes(stepIndex);
  };

  const steps = [
    {
      label: 'Step 1: Employment Background',
      component: (
        <EmploymentBg
          handleNextStep={handleNextStep}
          setParentObject={setParentObject}
        />
      ),
    },
    {
      label: 'Step 2: Previous Employment',
      component: (
        <PrevEmployment
          handleNextStep={handleNextStep}
          setParentObject={setParentObject}
        />
      ),
    },
    {
      label: 'Step 3: Bank Reference',
      component: (
        <BankInfo
          handleNextStep={handleNextStep}
          setParentObject={setParentObject}
        />
      ),
    },
    {
      label: 'Step 4: Partner Data',
      component: (
        <PartnerData
          handleNextStep={handleNextStep}
          setParentObject={setParentObject}
        />
      ),
    },
    {
      label: 'Step 5: Partner Employment Background',
      component: (
        <PartnerEmploymentBg
          handleNextStep={handleNextStep}
          setParentObject={setParentObject}
        />
      ),
    },
    {
      label: 'Step 6: Partner Address',
      component: (
        <PartnerAddress
          handleNextStep={handleNextStep}
          setParentObject={setParentObject}
        />
      ),
    },
  ];

  const handleFormSubmit = () => {
    console.log(parentObject);
    worksKyc(parentObject);
  };

  useEffect(() => {
    if (isSuccess) {
      toast({
        title: 'Success',
        description: 'Form submitted successfully!',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      navigate('/assets-kyc');
    }
  }, [isSuccess]);
  return (
    <>
      {isLoading && <Loader />}
      <HStack alignItems={'flex-start'} display={{ base: 'block', md: 'flex' }}>
        <Stack
          w={{ base: '100vw' }}
          sx={{
            '@media print': {
              display: 'none',
            },
          }}>
          <Box p={4}>
            <Progress
              value={(completedSteps.length / steps.length) * 100}
              mb={4}
            />

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
                    onClick={() => handleStepClick(index)}
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
                <Button
                  colorScheme='blue'
                  onClick={handleFormSubmit}
                  w={'full'}>
                  Submit Form
                </Button>
              </Box>
            )}
          </Box>
        </Stack>
      </HStack>
    </>
  );
};

export default WorksKycComponent;

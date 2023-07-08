import React, { useEffect, useState } from 'react';
import {
  Box,
  Stack,
  Text,
  Button,
  Collapse,
  Progress,
  useToast,
  VStack,
  HStack,
} from '@chakra-ui/react';

import { FiCheckSquare } from 'react-icons/fi';

import { useNavigate } from 'react-router-dom';
import HerritageAssets from './HerritageAssets';
import HerritagePassives from './HerritagePassives';
import MonthlyIncome from './MonthlyIncome';
import FinancialInvestment from './FinancialInvestment';
import CompanyParticipations from './CompanyParicipations';
import RealEstateDetail from './RealEstateDetail';
import VehicleDetails from './VehicleDetails';
import DebtDetails from './DebtDetails';
import { useAssetskycMutation } from '../../features/user/userApi';
import Loader from '../common/Spinner';

const AssetsKycComponent = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [parentObject, setParentObject] = useState({});
  const toast = useToast();
  const navigate = useNavigate();

  const [assetsKyc, { data, isLoading, isError, error, isSuccess }] =
    useAssetskycMutation();
  const handleNextStep = () => {
    setCompletedSteps((prevCompletedSteps) => [
      ...prevCompletedSteps,
      currentStep,
    ]);
    setCurrentStep((prevStep) => prevStep + 1);
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
      label: 'Assets',
      component: (
        <HerritageAssets
          handleNextStep={handleNextStep}
          setParentObject={setParentObject}
        />
      ),
    },
    {
      label: 'Passives',
      component: (
        <HerritagePassives
          handleNextStep={handleNextStep}
          setParentObject={setParentObject}
        />
      ),
    },
    {
      label: 'Monthly Income',
      component: (
        <MonthlyIncome
          handleNextStep={handleNextStep}
          setParentObject={setParentObject}
        />
      ),
    },
    {
      label: 'Savings & FInancial Investments',
      component: (
        <FinancialInvestment
          handleNextStep={handleNextStep}
          setParentObject={setParentObject}
        />
      ),
    },
    {
      label: 'Participation in companies',
      component: (
        <CompanyParticipations
          handleNextStep={handleNextStep}
          setParentObject={setParentObject}
        />
      ),
    },
    {
      label: 'Real Estate Details',
      component: (
        <RealEstateDetail
          handleNextStep={handleNextStep}
          setParentObject={setParentObject}
        />
      ),
    },
    {
      label: 'Vehicle Details',
      component: (
        <VehicleDetails
          handleNextStep={handleNextStep}
          setParentObject={setParentObject}
        />
      ),
    },
    {
      label: 'Debt Details',
      component: (
        <DebtDetails
          handleNextStep={handleNextStep}
          setParentObject={setParentObject}
        />
      ),
    },
  ];

  const handleFormSubmit = () => {
    assetsKyc(parentObject);
  };
  useEffect(() => {
    if (isError) {
      toast({
        title: 'Error',
        // description: error.data.message,
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  }, [isError]);

  useEffect(() => {
    if (isSuccess) {
      toast({
        title: 'Success',
        description: 'Form submitted successfully!',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      navigate('/kyc-submitted');
    }
  }, [isSuccess]);

  return (
    <>
      {isLoading && <Loader />}
      <VStack>
        <Stack>
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
      </VStack>
    </>
  );
};

export default AssetsKycComponent;

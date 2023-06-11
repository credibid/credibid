import React, { useState } from 'react';
import {
  Box,
  Stack,
  Text,
  Button,
  Collapse,
  Progress,
  FormControl,
  FormLabel,
  Input,
  useToast,
} from '@chakra-ui/react';
import PersonalInfo from './PersonalInfo';

const Step1 = ({ handleNextStep, setParentObject }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const toast = useToast();

  const onSubmit = (e) => {
    e.preventDefault();

    if (firstName.trim() !== '' && lastName.trim() !== '') {
      setParentObject((prevObject) => ({ ...prevObject, firstName, lastName }));
      handleNextStep();
    } else {
      toast({
        title: 'Error',
        description: 'Please enter both first name and last name.',
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top',
      });
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <Stack spacing={4}>
        <FormControl>
          <FormLabel>First Name</FormLabel>
          <Input
            type='text'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Last Name</FormLabel>
          <Input
            type='text'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </FormControl>
        <Button colorScheme='blue' type='submit'>
          Next
        </Button>
      </Stack>
    </form>
  );
};

// Additional Step for Reference
const Step2 = ({ handleNextStep, setParentObject }) => {
  const [email, setEmail] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    if (email.trim() !== '') {
      setParentObject((prevObject) => ({ ...prevObject, email }));
      handleNextStep();
    } else {
      toast({
        title: 'Error',
        description: 'Please enter an email address.',
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top',
      });
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <Stack spacing={4}>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <Button colorScheme='blue' type='submit'>
          Next
        </Button>
      </Stack>
    </form>
  );
};

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

  const handlePrevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const isStepCompleted = (stepIndex) => {
    return completedSteps.includes(stepIndex);
  };

  const steps = [
    {
      label: 'Step 1: Personal Info',
      component: (
        <PersonalInfo
          handleNextStep={handleNextStep}
          setParentObject={setParentObject}
        />
      ),
    },
    {
      label: 'Step 2: Email',
      component: (
        <Step2
          handleNextStep={handleNextStep}
          setParentObject={setParentObject}
        />
      ),
    },
    // Add more steps here
  ];

  const handleFormSubmit = () => {
    // Handle form submission (e.g., send data to server)
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
              bg={currentStep === index ? 'blue.50' : ''}>
              <Text fontWeight='bold'>{step.label}</Text>
              {isStepCompleted(index) && (
                <Text color='green.500' fontWeight='bold'>
                  Completed
                </Text>
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
  );
};

export default MultiStepForm;

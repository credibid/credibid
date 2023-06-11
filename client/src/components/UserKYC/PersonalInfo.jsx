import React, { useState } from 'react';
import {
  Stack,
  Button,
  FormControl,
  FormLabel,
  Input,
  useToast,
} from '@chakra-ui/react';

const AdditionalInfo = ({ handleNextStep, setParentObject }) => {
  const [dependants, setDependants] = useState('');
  const [civilStatus, setCivilStatus] = useState('');
  const [conjugalRegime, setConjugalRegime] = useState('');
  const [numberOfSons, setNumberOfSons] = useState('');
  const [numberOfCargas, setNumberOfCargas] = useState('');
  const [housingType, setHousingType] = useState('');
  const [educationLevel, setEducationLevel] = useState('');
  const [university, setUniversity] = useState('');
  const [profession, setProfession] = useState('');

  const toast = useToast();

  const onSubmit = (e) => {
    e.preventDefault();

    if (
      dependants.trim() !== '' &&
      civilStatus.trim() !== '' &&
      conjugalRegime.trim() !== '' &&
      numberOfSons.trim() !== '' &&
      numberOfCargas.trim() !== '' &&
      housingType.trim() !== '' &&
      educationLevel.trim() !== '' &&
      university.trim() !== '' &&
      profession.trim() !== ''
    ) {
      setParentObject((prevObject) => ({
        ...prevObject,
        dependants,
        civilStatus,
        conjugalRegime,
        numberOfSons,
        numberOfCargas,
        housingType,
        educationLevel,
        university,
        profession,
      }));
      handleNextStep();
    } else {
      toast({
        title: 'Error',
        description: 'Please fill in all the required fields.',
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
          <FormLabel>Number of Dependents</FormLabel>
          <Input
            type='text'
            value={dependants}
            onChange={(e) => setDependants(e.target.value)}
            placeholder='e.g. 2'
          />
        </FormControl>
        <FormControl>
          <FormLabel>Civil Status</FormLabel>
          <Input
            type='text'
            value={civilStatus}
            onChange={(e) => setCivilStatus(e.target.value)}
            placeholder='e.g. Single / Married'
          />
        </FormControl>
        <FormControl>
          <FormLabel>Conjugal Regime</FormLabel>
          <Input
            type='text'
            value={conjugalRegime}
            onChange={(e) => setConjugalRegime(e.target.value)}
            placeholder='e.g. Community of Property / Separate Property'
          />
        </FormControl>
        <FormControl>
          <FormLabel>Number of Sons</FormLabel>
          <Input
            type='text'
            value={numberOfSons}
            onChange={(e) => setNumberOfSons(e.target.value)}
            placeholder='e.g. 2'
          />
        </FormControl>
        <FormControl>
          <FormLabel>Number of Cargas</FormLabel>
          <Input
            type='text'
            value={numberOfCargas}
            onChange={(e) => setNumberOfCargas(e.target.value)}
            placeholder='e.g. 3'
          />
        </FormControl>
        <FormControl>
          <FormLabel>Housing Type</FormLabel>
          <Input
            type='text'
            value={housingType}
            onChange={(e) => setHousingType(e.target.value)}
            placeholder='e.g. House / Apartment'
          />
        </FormControl>
        <FormControl>
          <FormLabel>Education Level</FormLabel>
          <Input
            type='text'
            value={educationLevel}
            onChange={(e) => setEducationLevel(e.target.value)}
            placeholder='e.g. High School / College'
          />
        </FormControl>
        <FormControl>
          <FormLabel>University</FormLabel>
          <Input
            type='text'
            value={university}
            onChange={(e) => setUniversity(e.target.value)}
            placeholder='e.g. Stanford University'
          />
        </FormControl>
        <FormControl>
          <FormLabel>Profession</FormLabel>
          <Input
            type='text'
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
            placeholder='e.g. Engineer / Teacher'
          />
        </FormControl>
        <Button colorScheme='blue' type='submit'>
          Submit & Next
        </Button>
      </Stack>
    </form>
  );
};

export default AdditionalInfo;

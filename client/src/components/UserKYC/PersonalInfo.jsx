import React, { useState } from 'react';
import {
  Stack,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  useToast,
  HStack,
} from '@chakra-ui/react';

const PersonalInfo = ({ handleNextStep, setParentObject }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [nationality, setNationality] = useState('');
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
      firstName.trim() !== '' &&
      lastName.trim() !== '' &&
      gender.trim() !== '' &&
      nationality.trim() !== '' &&
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
        firstName,
        lastName,
        gender,
        nationality,
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
        <HStack>
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
        </HStack>
        <FormControl>
          <FormLabel>Gender</FormLabel>
          <Select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
            <option value='other'>Other</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Nationality</FormLabel>
          <Input
            type='text'
            value={nationality}
            onChange={(e) => setNationality(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Number of Dependents</FormLabel>
          <Input
            type='text'
            value={dependants}
            onChange={(e) => setDependants(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Civil Status</FormLabel>
          <Input
            type='text'
            value={civilStatus}
            onChange={(e) => setCivilStatus(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Conjugal Regime</FormLabel>
          <Input
            type='text'
            value={conjugalRegime}
            onChange={(e) => setConjugalRegime(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Number of Sons</FormLabel>
          <Input
            type='text'
            value={numberOfSons}
            onChange={(e) => setNumberOfSons(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Number of Cargas</FormLabel>
          <Input
            type='text'
            value={numberOfCargas}
            onChange={(e) => setNumberOfCargas(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Housing Type</FormLabel>
          <Input
            type='text'
            value={housingType}
            onChange={(e) => setHousingType(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Education Level</FormLabel>
          <Input
            type='text'
            value={educationLevel}
            onChange={(e) => setEducationLevel(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>University</FormLabel>
          <Input
            type='text'
            value={university}
            onChange={(e) => setUniversity(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Profession</FormLabel>
          <Input
            type='text'
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
          />
        </FormControl>
        <Button colorScheme='blue' type='submit'>
          Next
        </Button>
      </Stack>
    </form>
  );
};

export default PersonalInfo;

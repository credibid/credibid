import React, { useState } from 'react';
import {
  Stack,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  useToast,
} from '@chakra-ui/react';

const BasicInfo = ({ handleNextStep, setParentObject }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [celular, setCelular] = useState('');
  const [gender, setGender] = useState('');
  const [nationality, setNationality] = useState('');

  const toast = useToast();

  const onSubmit = (e) => {
    e.preventDefault();

    if (
      firstName.trim() !== '' &&
      lastName.trim() !== '' &&
      gender.trim() !== '' &&
      celular.trim() !== '' &&
      nationality.trim() !== ''
    ) {
      setParentObject((prevObject) => ({
        ...prevObject,
        firstName,
        lastName,
        gender,
        celular,
        nationality,
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
          <FormLabel>First Name</FormLabel>
          <Input
            type='text'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder='John'
          />
        </FormControl>
        <FormControl>
          <FormLabel>Last Name</FormLabel>
          <Input
            type='text'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder='Doe'
          />
        </FormControl>
        <FormControl>
          <FormLabel>Celular</FormLabel>
          <Input
            type='text'
            value={celular}
            onChange={(e) => setCelular(e.target.value)}
            placeholder='e.g. 1234567890'
          />
        </FormControl>
        <FormControl>
          <FormLabel>Gender</FormLabel>
          <Select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value=''>Select Gender</option>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
            <option value='transgender'>Transgender</option>
            <option value='gender neutral'>Gender Neutral</option>
            <option value='non-binary'>Non-Binary</option>
            <option value='agender'>Agender</option>
            <option value='pangender'>Pangender</option>
            <option value='genderqueer'>Genderqueer</option>
            <option value='two-spirit'>Two-Spirit</option>
            <option value='third gender'>Third Gender</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Nationality</FormLabel>
          <Input
            type='text'
            value={nationality}
            onChange={(e) => setNationality(e.target.value)}
            placeholder='e.g. American / Bangladeshi'
          />
        </FormControl>
        <Button colorScheme='blue' type='submit'>
          Submit & Next
        </Button>
      </Stack>
    </form>
  );
};

export default BasicInfo;

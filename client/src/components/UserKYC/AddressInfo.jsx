import React, { useState } from 'react';
import {
  Stack,
  Button,
  FormControl,
  FormLabel,
  Input,
  useToast,
} from '@chakra-ui/react';

const AddressInfo = ({ handleNextStep, setParentObject }) => {
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [house, setHouse] = useState('');
  const [department, setDepartment] = useState('');
  const [community, setCommunity] = useState('');
  const [city, setCity] = useState('');
  const [region, setRegion] = useState('');

  const toast = useToast();

  const onSubmit = (e) => {
    e.preventDefault();

    if (
      street.trim() !== '' &&
      number.trim() !== '' &&
      house.trim() !== '' &&
      department.trim() !== '' &&
      community.trim() !== '' &&
      city.trim() !== '' &&
      region.trim() !== ''
    ) {
      setParentObject((prevObject) => ({
        ...prevObject,
        street,
        number,
        house,
        department,
        community,
        city,
        region,
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
        <FormControl isRequired>
          <FormLabel>Street</FormLabel>
          <Input
            type='text'
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Number</FormLabel>
          <Input
            type='text'
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>House</FormLabel>
          <Input
            type='text'
            value={house}
            onChange={(e) => setHouse(e.target.value)}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Department</FormLabel>
          <Input
            type='text'
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Community</FormLabel>
          <Input
            type='text'
            value={community}
            onChange={(e) => setCommunity(e.target.value)}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>City</FormLabel>
          <Input
            type='text'
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Region</FormLabel>
          <Input
            type='text'
            value={region}
            onChange={(e) => setRegion(e.target.value)}
          />
        </FormControl>
        <Button colorScheme='blue' type='submit'>
          Submit & Next
        </Button>
      </Stack>
    </form>
  );
};

export default AddressInfo;

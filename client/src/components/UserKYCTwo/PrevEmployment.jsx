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

const PrevEmployment = ({ handleNextStep, setParentObject }) => {
  const [previousEmployment, setPreviousEmployment] = useState({
    emloyerNumber: '',
    companyName: '',
    businessLine: '',
    economicActivity: '',
    startOfEmploymentDate: '',
    endOfEmploymentDate: '',
  });
  const toast = useToast();

  const onSubmit = (e) => {
    e.preventDefault();

    setParentObject((prevObject) => ({
      ...prevObject,
      previousEmployment,
    }));
    handleNextStep();
  };

  return (
    <form onSubmit={onSubmit}>
      <Stack spacing={4}>
        <FormControl>
          <FormLabel>Employer Number</FormLabel>
          <Input
            type='number'
            value={previousEmployment.emloyerNumber}
            onChange={(e) =>
              setPreviousEmployment({
                ...previousEmployment,
                emloyerNumber: e.target.value,
              })
            }
            placeholder='e.g. 12345'
          />
        </FormControl>
        <FormControl>
          <FormLabel>Company Name</FormLabel>
          <Input
            type='text'
            value={previousEmployment.companyName}
            onChange={(e) =>
              setPreviousEmployment({
                ...previousEmployment,
                companyName: e.target.value,
              })
            }
            placeholder='e.g. ABC Company'
          />
        </FormControl>
        <FormControl>
          <FormLabel>Business Line</FormLabel>
          <Input
            type='text'
            value={previousEmployment.businessLine}
            onChange={(e) =>
              setPreviousEmployment({
                ...previousEmployment,
                businessLine: e.target.value,
              })
            }
            placeholder='e.g. Manufacturing'
          />
        </FormControl>
        <FormControl>
          <FormLabel>Economic Activity</FormLabel>
          <Input
            type='text'
            value={previousEmployment.economicActivity}
            onChange={(e) =>
              setPreviousEmployment({
                ...previousEmployment,
                economicActivity: e.target.value,
              })
            }
            placeholder='e.g. Manufacturing'
          />
        </FormControl>
        <FormControl>
          <FormLabel>Start of Employment Date</FormLabel>
          <Input
            type='date'
            value={previousEmployment.startOfEmploymentDate}
            onChange={(e) =>
              setPreviousEmployment({
                ...previousEmployment,
                startOfEmploymentDate: e.target.value,
              })
            }
            placeholder='e.g. 12/12/2023'
          />
        </FormControl>
        <FormControl>
          <FormLabel>End of Employment Date</FormLabel>
          <Input
            type='date'
            value={previousEmployment.endOfEmploymentDate}
            onChange={(e) =>
              setPreviousEmployment({
                ...previousEmployment,
                endOfEmploymentDate: e.target.value,
              })
            }
            placeholder='e.g. 12/12/2023'
          />
        </FormControl>

        <Button colorScheme='blue' type='submit'>
          Submit & Next
        </Button>
      </Stack>
    </form>
  );
};

export default PrevEmployment;

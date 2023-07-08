import React from 'react';
import { useState } from 'react';
import {
  Stack,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  useToast,
} from '@chakra-ui/react';

const PartnerEmploymentBg = ({ handleNextStep, setParentObject }) => {
  const [partnerEmploymentBg, setPartnerEmploymentBg] = useState({
    dependent: '',
    emloyerNumber: '',
    companyName: '',
    economicActivity: '',
    startOfContractDate: '',
    position: '',
    monthlyIncome: '',
  });

  const toast = useToast();

  const onSubmit = (e) => {
    e.preventDefault();

    setParentObject((prevObject) => ({
      ...prevObject,
      partnerEmploymentBg,
    }));
    handleNextStep();
  };

  return (
    <form onSubmit={onSubmit}>
      <Stack spacing={4}>
        <FormControl>
          <FormLabel>Are you a dependent or independent?</FormLabel>
          <Select
            value={partnerEmploymentBg.dependent}
            onChange={(e) =>
              setPartnerEmploymentBg({
                ...partnerEmploymentBg,
                dependent: e.target.value,
              })
            }>
            <option value=''>Select Dependent or Independent</option>
            <option value='dependent'>Dependent</option>
            <option value='independent'>Independent</option>
          </Select>
        </FormControl>
        <FormControl>
          {partnerEmploymentBg.dependent === 'dependent' ? (
            <>
              <FormLabel>Unique identification number employer</FormLabel>
              <Input
                type='number'
                value={partnerEmploymentBg.emloyerNumber}
                onChange={(e) =>
                  setPartnerEmploymentBg({
                    ...partnerEmploymentBg,
                    emloyerNumber: e.target.value,
                  })
                }
                placeholder='e.g. 1234567890'
              />
            </>
          ) : (
            false
          )}
        </FormControl>
        <FormControl>
          {partnerEmploymentBg.dependent === 'dependent' ? (
            <>
              <FormLabel>Company Name</FormLabel>
              <Input
                type='text'
                value={partnerEmploymentBg.companyName}
                onChange={(e) =>
                  setPartnerEmploymentBg({
                    ...partnerEmploymentBg,
                    companyName: e.target.value,
                  })
                }
                placeholder='e.g. ABC123'
              />
            </>
          ) : (
            false
          )}
        </FormControl>
        <FormControl>
          {partnerEmploymentBg.dependent === 'dependent' ||
          partnerEmploymentBg.dependent === 'independent' ? (
            <>
              <FormLabel>Economic Activity</FormLabel>
              <Input
                type='text'
                value={partnerEmploymentBg.economicActivity}
                onChange={(e) =>
                  setPartnerEmploymentBg({
                    ...partnerEmploymentBg,
                    economicActivity: e.target.value,
                  })
                }
                placeholder='e.g. ABC123'
              />
            </>
          ) : null}
        </FormControl>
        <FormControl>
          {partnerEmploymentBg.dependent === 'dependent' ||
          partnerEmploymentBg.dependent === 'independent' ? (
            <>
              <FormLabel>Start of contract date</FormLabel>
              <Input
                type='date'
                value={partnerEmploymentBg.startOfContractDate}
                onChange={(e) =>
                  setPartnerEmploymentBg({
                    ...partnerEmploymentBg,
                    startOfContractDate: e.target.value,
                  })
                }
                placeholder={new Date().toISOString().slice(0, 10)}
              />
            </>
          ) : null}
        </FormControl>
        <FormControl>
          {partnerEmploymentBg.dependent === 'dependent' ? (
            <>
              <FormLabel>Position or job title</FormLabel>
              <Input
                type='text'
                value={partnerEmploymentBg.position}
                onChange={(e) =>
                  setPartnerEmploymentBg({
                    ...partnerEmploymentBg,
                    position: e.target.value,
                  })
                }
                placeholder='e.g. ABC123'
              />
            </>
          ) : null}
        </FormControl>
        <FormControl>
          {partnerEmploymentBg.dependent === 'dependent' ||
          partnerEmploymentBg.dependent === 'independent' ? (
            <>
              <FormLabel>Monthly Income ($)</FormLabel>
              <Input
                type='number'
                value={partnerEmploymentBg.monthlyIncome}
                onChange={(e) =>
                  setPartnerEmploymentBg({
                    ...partnerEmploymentBg,
                    monthlyIncome: e.target.value,
                  })
                }
                placeholder='e.g. 10000000'
              />
            </>
          ) : null}
        </FormControl>
        <Button colorScheme='blue' type='submit'>
          Submit & Next
        </Button>
      </Stack>
    </form>
  );
};

export default PartnerEmploymentBg;

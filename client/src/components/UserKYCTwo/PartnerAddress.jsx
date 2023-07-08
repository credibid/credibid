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

const PartnerAddress = ({ handleNextStep, setParentObject }) => {
  const [partnerAddress, setPartnerAddress] = useState({
    street: '',
    number: '',
    house: '',
    department: '',
    commune: '',
    city: '',
    region: '',
    phone: '',
    email: '',
  });

  const toast = useToast();

  const onSubmit = (e) => {
    e.preventDefault();

    setParentObject((prevObject) => ({
      ...prevObject,
      partnerAddress,
    }));
    handleNextStep();
  };

  return (
    <form onSubmit={onSubmit}>
      <Stack spacing={4}>
        <FormControl>
          <FormLabel>Street</FormLabel>
          <Input
            type='text'
            value={partnerAddress.street}
            onChange={(e) =>
              setPartnerAddress({
                ...partnerAddress,
                street: e.target.value,
              })
            }
            placeholder='e.g. 123 Main St.'
          />
        </FormControl>
        <FormControl>
          <FormLabel>Number</FormLabel>
          <Input
            type='text'
            value={partnerAddress.number}
            onChange={(e) =>
              setPartnerAddress({
                ...partnerAddress,
                number: e.target.value,
              })
            }
            placeholder='e.g. 123-291023'
          />
        </FormControl>
        <FormControl>
          <FormLabel>House</FormLabel>
          <Input
            type='text'
            value={partnerAddress.house}
            onChange={(e) =>
              setPartnerAddress({
                ...partnerAddress,
                house: e.target.value,
              })
            }
            placeholder='e.g. 123 Main St.'
          />
        </FormControl>
        <FormControl>
          <FormLabel>Department</FormLabel>
          <Input
            type='text'
            value={partnerAddress.department}
            onChange={(e) =>
              setPartnerAddress({
                ...partnerAddress,
                department: e.target.value,
              })
            }
            placeholder='e.g. 123 Main St.'
          />
        </FormControl>
        <FormControl>
          <FormLabel>Commune</FormLabel>
          <Input
            type='text'
            value={partnerAddress.commune}
            onChange={(e) =>
              setPartnerAddress({
                ...partnerAddress,
                commune: e.target.value,
              })
            }
            placeholder='e.g. 123 Main St.'
          />
        </FormControl>
        <FormControl>
          <FormLabel>City</FormLabel>
          <Input
            type='text'
            value={partnerAddress.city}
            onChange={(e) =>
              setPartnerAddress({
                ...partnerAddress,
                city: e.target.value,
              })
            }
            placeholder='e.g. Barcelona'
          />
        </FormControl>
        <FormControl>
          <FormLabel>Region</FormLabel>
          <Input
            type='text'
            value={partnerAddress.region}
            onChange={(e) =>
              setPartnerAddress({
                ...partnerAddress,
                region: e.target.value,
              })
            }
            placeholder='e.g. Catalonia'
          />
        </FormControl>
        <FormControl>
          <FormLabel>Phone</FormLabel>
          <Input
            type='text'
            value={partnerAddress.phone}
            onChange={(e) =>
              setPartnerAddress({
                ...partnerAddress,
                phone: e.target.value,
              })
            }
            placeholder='e.g. 123-291023'
          />
        </FormControl>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            type='text'
            value={partnerAddress.email}
            onChange={(e) =>
              setPartnerAddress({
                ...partnerAddress,
                email: e.target.value,
              })
            }
            placeholder='e.g. john@gmail.com'
          />
        </FormControl>
        <Button type='submit' colorScheme='blue'>
          Submit
        </Button>
      </Stack>
    </form>
  );
};

export default PartnerAddress;

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

const BankInfo = ({ handleNextStep, setParentObject }) => {
  const [bankReferences, setBankReferences] = useState({
    bankName: '',
    product: '',
    number: '',
  });

  const toast = useToast();

  const onSubmit = (e) => {
    e.preventDefault();

    setParentObject((prevObject) => ({
      ...prevObject,
      bankReferences,
    }));
    handleNextStep();
  };

  return (
    <form onSubmit={onSubmit}>
      <Stack spacing={4}>
        <FormControl>
          <FormLabel>Bank</FormLabel>
          <Input
            type='text'
            value={bankReferences.bankName}
            onChange={(e) =>
              setBankReferences({
                ...bankReferences,
                bankName: e.target.value,
              })
            }
            placeholder='Bank Name'
          />
        </FormControl>
        <FormControl>
          <FormLabel>Product</FormLabel>
          <Input
            type='text'
            value={bankReferences.product}
            onChange={(e) =>
              setBankReferences({
                ...bankReferences,
                product: e.target.value,
              })
            }
            placeholder='Product'
          />
        </FormControl>
        <FormControl>
          <FormLabel>
            N<sup>o</sup>
          </FormLabel>
          <Input
            type='number'
            value={bankReferences.number}
            onChange={(e) =>
              setBankReferences({
                ...bankReferences,
                number: e.target.value,
              })
            }
            placeholder='number'
          />
        </FormControl>
        <Button colorScheme='blue' type='submit'>
          Submit & Next
        </Button>
      </Stack>
    </form>
  );
};

export default BankInfo;

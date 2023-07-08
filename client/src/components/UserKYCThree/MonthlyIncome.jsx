import React, { useState } from 'react';
import {
  Stack,
  Button,
  FormControl,
  FormLabel,
  Input,
  useToast,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  HStack,
  Tfoot,
} from '@chakra-ui/react';

function IncomeRow({ label, amount, onAmountChange }) {
  return (
    <Tr>
      <Td>{label}</Td>
      <Td>
        <Input
          type='number'
          value={amount}
          onChange={onAmountChange}
          size='sm'
          borderColor={'gray.200'}
          rounded={'md'}
        />
      </Td>
    </Tr>
  );
}

const MonthlyIncome = ({ handleNextStep, setParentObject }) => {
  const toast = useToast();
  const [income, setIncome] = useState({
    fixedRent: '',
    variableIncome: '',
    otherIncome: '',
  });

  const handleAmountChange = (incomeType, event) => {
    setIncome((prevIncome) => ({
      ...prevIncome,
      [incomeType]: event.target.value,
    }));
  };

  const calculateTotal = () => {
    let totalIncome = 0;

    for (const amount of Object.values(income)) {
      totalIncome += Number(amount);
    }

    return totalIncome;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setParentObject((prevObject) => ({
      ...prevObject,
      income,
    }));

    handleNextStep();
  };

  const totalIncome = calculateTotal();

  return (
    <form onSubmit={onSubmit}>
      <Stack spacing={0}>
        <Table>
          <Thead>
            <Tr>
              <Th>Income Type</Th>
              <Th>Amount ($)</Th>
            </Tr>
          </Thead>
          <Tbody>
            <IncomeRow
              label='Fixed Rent'
              amount={income.fixedRent}
              onAmountChange={(e) => handleAmountChange('fixedRent', e)}
            />
            <IncomeRow
              label='Variable Income'
              amount={income.variableIncome}
              onAmountChange={(e) => handleAmountChange('variableIncome', e)}
            />
            <IncomeRow
              label='Other Income'
              amount={income.otherIncome}
              onAmountChange={(e) => handleAmountChange('otherIncome', e)}
            />
          </Tbody>
          <Tfoot bgColor={'green.100'}>
            <Tr>
              <Th>Total Income</Th>
              <Th>{totalIncome}</Th>
            </Tr>
          </Tfoot>
        </Table>
        <Button type='submit' colorScheme='blue' mt='2'>
          Next
        </Button>
      </Stack>
    </form>
  );
};

export default MonthlyIncome;

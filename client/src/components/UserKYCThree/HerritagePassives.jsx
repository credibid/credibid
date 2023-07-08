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

import { Radio, RadioGroup, VStack } from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

function CreditPassiveRow({
  label,
  amountDebt,
  monthlyPayment,
  onAmountDebtChange,
  onMonthlyPaymentChange,
}) {
  return (
    <Tr>
      <Td>{label}</Td>
      <Td>
        <Input
          type='number'
          value={amountDebt}
          onChange={onAmountDebtChange}
          size='sm'
          borderColor={'gray.200'}
          rounded={'md'}
        />
      </Td>
      <Td>
        <Input
          type='number'
          value={monthlyPayment}
          onChange={onMonthlyPaymentChange}
          size='sm'
          borderColor={'gray.200'}
          rounded={'md'}
        />
      </Td>
    </Tr>
  );
}

const HeritagePassives = ({ handleNextStep, setParentObject }) => {
  const toast = useToast();
  const [passives, setPassives] = useState({
    creditCards: { amountDebt: '', monthlyPayment: '' },
    linesOfCredit: { amountDebt: '', monthlyPayment: '' },
    consumerCreditBalance: { amountDebt: '', monthlyPayment: '' },
    mortgageCreditBalance: { amountDebt: '', monthlyPayment: '' },
    balanceOtherCredits: { amountDebt: '', monthlyPayment: '' },
    otherPassives: { amountDebt: '', monthlyPayment: '' },
  });

  const handleAmountDebtChange = (passive, event) => {
    setPassives((prevPassives) => ({
      ...prevPassives,
      [passive]: { ...prevPassives[passive], amountDebt: event.target.value },
    }));
  };

  const handleMonthlyPaymentChange = (passive, event) => {
    setPassives((prevPassives) => ({
      ...prevPassives,
      [passive]: {
        ...prevPassives[passive],
        monthlyPayment: event.target.value,
      },
    }));
  };

  const calculateTotal = () => {
    let totalAmountDebt = 0;
    let totalMonthlyPayment = 0;

    for (const passive of Object.values(passives)) {
      totalAmountDebt += Number(passive.amountDebt);
      totalMonthlyPayment += Number(passive.monthlyPayment);
    }

    return { totalAmountDebt, totalMonthlyPayment };
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setParentObject((prevObject) => ({
      ...prevObject,
      passives,
    }));

    handleNextStep();
  };

  const { totalAmountDebt, totalMonthlyPayment } = calculateTotal();

  return (
    <form onSubmit={onSubmit}>
      <Stack spacing={0}>
        <Table>
          <Thead>
            <Tr>
              <Th>Passive Type</Th>
              <Th>Amount Debt</Th>
              <Th>Monthly Payment ($)</Th>
            </Tr>
          </Thead>
          <Tbody>
            <CreditPassiveRow
              label='Quota Used Credit Cards'
              amountDebt={passives.creditCards.amountDebt}
              monthlyPayment={passives.creditCards.monthlyPayment}
              onAmountDebtChange={(e) =>
                handleAmountDebtChange('creditCards', e)
              }
              onMonthlyPaymentChange={(e) =>
                handleMonthlyPaymentChange('creditCards', e)
              }
            />
            <CreditPassiveRow
              label='Quota Used Lines of Credit'
              amountDebt={passives.linesOfCredit.amountDebt}
              monthlyPayment={passives.linesOfCredit.monthlyPayment}
              onAmountDebtChange={(e) =>
                handleAmountDebtChange('linesOfCredit', e)
              }
              onMonthlyPaymentChange={(e) =>
                handleMonthlyPaymentChange('linesOfCredit', e)
              }
            />
            <CreditPassiveRow
              label='Consumer Credit Balance'
              amountDebt={passives.consumerCreditBalance.amountDebt}
              monthlyPayment={passives.consumerCreditBalance.monthlyPayment}
              onAmountDebtChange={(e) =>
                handleAmountDebtChange('consumerCreditBalance', e)
              }
              onMonthlyPaymentChange={(e) =>
                handleMonthlyPaymentChange('consumerCreditBalance', e)
              }
            />
            <CreditPassiveRow
              label='Mortgage Credit Balance'
              amountDebt={passives.mortgageCreditBalance.amountDebt}
              monthlyPayment={passives.mortgageCreditBalance.monthlyPayment}
              onAmountDebtChange={(e) =>
                handleAmountDebtChange('mortgageCreditBalance', e)
              }
              onMonthlyPaymentChange={(e) =>
                handleMonthlyPaymentChange('mortgageCreditBalance', e)
              }
            />
            <CreditPassiveRow
              label='Balance Other Credits'
              amountDebt={passives.balanceOtherCredits.amountDebt}
              monthlyPayment={passives.balanceOtherCredits.monthlyPayment}
              onAmountDebtChange={(e) =>
                handleAmountDebtChange('balanceOtherCredits', e)
              }
              onMonthlyPaymentChange={(e) =>
                handleMonthlyPaymentChange('balanceOtherCredits', e)
              }
            />
            <CreditPassiveRow
              label='Other Passives'
              amountDebt={passives.otherPassives.amountDebt}
              monthlyPayment={passives.otherPassives.monthlyPayment}
              onAmountDebtChange={(e) =>
                handleAmountDebtChange('otherPassives', e)
              }
              onMonthlyPaymentChange={(e) =>
                handleMonthlyPaymentChange('otherPassives', e)
              }
            />
          </Tbody>
          <Tfoot bgColor={'green.100'}>
            <Tr>
              <Th>Total</Th>
              <Th>{totalAmountDebt}</Th>
              <Th>{totalMonthlyPayment}</Th>
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

export default HeritagePassives;

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
  Tfoot,
  Tr,
  Th,
  Td,
  HStack,
} from '@chakra-ui/react';

import { Radio, RadioGroup } from '@chakra-ui/react';

function DebtTypeInput({ value, onChange }) {
  return (
    <RadioGroup value={value} onChange={onChange}>
      <HStack align='start'>
        <Radio value='dir'>Direct</Radio>
        <Radio value='indir'>Indirect</Radio>
      </HStack>
    </RadioGroup>
  );
}

function DebtDetailsRow({
  index,
  type,
  institution,
  monthlyPayment,
  totalDebt,
  finalMaturity,
  outstandingDebt,
  onTypeChange,
  onInstitutionChange,
  onMonthlyPaymentChange,
  onTotalDebtChange,
  onFinalMaturityChange,
  onOutstandingDebtChange,
  onRemoveRow,
}) {
  return (
    <Tr>
      <Td>
        <Input value={type} onChange={(e) => onTypeChange(index, e)} />
      </Td>
      <Td>
        <Input
          value={institution}
          onChange={(e) => onInstitutionChange(index, e)}
        />
      </Td>
      <Td>
        <Input
          value={monthlyPayment}
          onChange={(e) => onMonthlyPaymentChange(index, e)}
        />
      </Td>
      <Td>
        <Input
          value={totalDebt}
          onChange={(e) => onTotalDebtChange(index, e)}
        />
      </Td>
      <Td>
        <Input
          value={finalMaturity}
          onChange={(e) => onFinalMaturityChange(index, e)}
        />
      </Td>
      <Td>
        <DebtTypeInput
          value={outstandingDebt}
          onChange={(value) => onOutstandingDebtChange(index, value)}
        />
      </Td>
      <Td>
        <Button colorScheme='red' size='sm' onClick={() => onRemoveRow(index)}>
          Remove
        </Button>
      </Td>
    </Tr>
  );
}

function DebtDetails({ handleNextStep, setParentObject }) {
  const toast = useToast();
  const [rows, setRows] = useState([
    {
      type: '',
      institution: '',
      monthlyPayment: '',
      totalDebt: '',
      finalMaturity: '',
      outstandingDebt: '',
    },
  ]);

  const handleTypeChange = (index, event) => {
    const updatedRows = [...rows];
    updatedRows[index].type = event.target.value;
    setRows(updatedRows);
  };

  const handleInstitutionChange = (index, event) => {
    const updatedRows = [...rows];
    updatedRows[index].institution = event.target.value;
    setRows(updatedRows);
  };

  const handleMonthlyPaymentChange = (index, event) => {
    const updatedRows = [...rows];
    updatedRows[index].monthlyPayment = event.target.value;
    setRows(updatedRows);
  };

  const handleTotalDebtChange = (index, event) => {
    const updatedRows = [...rows];
    updatedRows[index].totalDebt = event.target.value;
    setRows(updatedRows);
  };

  const handleFinalMaturityChange = (index, event) => {
    const updatedRows = [...rows];
    updatedRows[index].finalMaturity = event.target.value;
    setRows(updatedRows);
  };

  const handleOutstandingDebtChange = (index, value) => {
    const updatedRows = [...rows];
    updatedRows[index].outstandingDebt = value;
    setRows(updatedRows);
  };

  const handleAddRow = () => {
    const newRow = {
      type: '',
      institution: '',
      monthlyPayment: '',
      totalDebt: '',
      finalMaturity: '',
      outstandingDebt: '',
    };
    setRows([...rows, newRow]);
  };

  const handleRemoveRow = (index) => {
    const updatedRows = [...rows];
    updatedRows.splice(index, 1);
    setRows(updatedRows);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const debtDetails = rows.reduce(
      (acc, row, index) => ({
        ...acc,
        [index + 1]: { ...row },
      }),
      {}
    );
    setParentObject((prevObject) => ({
      ...prevObject,
      debtDetails,
    }));
    toast({
      title: 'Form Submitted',
      description: 'Debt Details saved successfully.',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
    handleNextStep();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={4}>
        <FormControl id='debtDetails'>
          <Table>
            <Thead>
              <Tr>
                <Th>Type</Th>
                <Th>Institution</Th>
                <Th>Monthly Payment ($)</Th>
                <Th>Total Debt ($)</Th>
                <Th>Final Maturity</Th>
                <Th>Outstanding Debt (Dir/Indir)</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {rows.map((row, index) => (
                <DebtDetailsRow
                  key={index}
                  index={index}
                  type={row.type}
                  institution={row.institution}
                  monthlyPayment={row.monthlyPayment}
                  totalDebt={row.totalDebt}
                  finalMaturity={row.finalMaturity}
                  outstandingDebt={row.outstandingDebt}
                  onTypeChange={handleTypeChange}
                  onInstitutionChange={handleInstitutionChange}
                  onMonthlyPaymentChange={handleMonthlyPaymentChange}
                  onTotalDebtChange={handleTotalDebtChange}
                  onFinalMaturityChange={handleFinalMaturityChange}
                  onOutstandingDebtChange={handleOutstandingDebtChange}
                  onRemoveRow={handleRemoveRow}
                />
              ))}
            </Tbody>
            <Tfoot>
              <Tr>
                <Td colSpan={7}>
                  <Button colorScheme='blue' size='sm' onClick={handleAddRow}>
                    Add Row
                  </Button>
                </Td>
              </Tr>
            </Tfoot>
          </Table>
        </FormControl>
        <Button colorScheme='blue' type='submit'>
          Next
        </Button>
      </Stack>
    </form>
  );
}

export default DebtDetails;

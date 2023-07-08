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

function MortgagePledgeInput({ value, onChange }) {
  return (
    <RadioGroup value={value} onChange={onChange}>
      <HStack align='start'>
        <Radio value='yes'>Yes</Radio>
        <Radio value='no'>No</Radio>
      </HStack>
    </RadioGroup>
  );
}

function FinancialInvestmentRow({
  index,
  type,
  institution,
  value,
  pledge,
  onTypeChange,
  onInstitutionChange,
  onValueChange,
  onPledgeChange,
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
        <Input value={value} onChange={(e) => onValueChange(index, e)} />
      </Td>
      <Td>
        <MortgagePledgeInput
          value={pledge}
          onChange={(value) => onPledgeChange(index, value)}
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

function FinancialInvestment({ handleNextStep, setParentObject }) {
  const toast = useToast();
  const [rows, setRows] = useState([
    { type: '', institution: '', value: '', pledge: '' },
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

  const handleValueChange = (index, event) => {
    const updatedRows = [...rows];
    updatedRows[index].value = event.target.value;
    setRows(updatedRows);
  };

  const handlePledgeChange = (index, value) => {
    const updatedRows = [...rows];
    updatedRows[index].pledge = value;
    setRows(updatedRows);
  };

  const handleAddRow = () => {
    const newRow = { type: '', institution: '', value: '', pledge: '' };
    setRows([...rows, newRow]);
  };

  const handleRemoveRow = (index) => {
    const updatedRows = [...rows];
    updatedRows.splice(index, 1);
    setRows(updatedRows);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const financialInvestment = rows.reduce(
      (acc, row, index) => ({
        ...acc,
        [index + 1]: { ...row },
      }),
      {}
    );
    setParentObject((prevObject) => ({
      ...prevObject,
      financialInvestment,
    }));
    toast({
      title: 'Form Submitted',
      description: 'Financial Investment data saved successfully.',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
    handleNextStep();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={4}>
        <FormControl id='financialInvestment'>
          <Table>
            <Thead>
              <Tr>
                <Th>Type</Th>
                <Th>Institution</Th>
                <Th>Value</Th>
                <Th>Pledge</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {rows.map((row, index) => (
                <FinancialInvestmentRow
                  key={index}
                  index={index}
                  type={row.type}
                  institution={row.institution}
                  value={row.value}
                  pledge={row.pledge}
                  onTypeChange={handleTypeChange}
                  onInstitutionChange={handleInstitutionChange}
                  onValueChange={handleValueChange}
                  onPledgeChange={handlePledgeChange}
                  onRemoveRow={handleRemoveRow}
                />
              ))}
            </Tbody>
            <Tfoot>
              <Tr>
                <Td colSpan={5}>
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

export default FinancialInvestment;

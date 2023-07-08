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

import { Radio, RadioGroup } from '@chakra-ui/react';

function MortgageInput({ value, onChange }) {
  return (
    <RadioGroup value={value} onChange={onChange}>
      <HStack align='start'>
        <Radio value='yes'>Yes</Radio>
        <Radio value='no'>No</Radio>
      </HStack>
    </RadioGroup>
  );
}

function RealEstateDetailRow({
  index,
  type,
  address,
  commune,
  fiscalAppraisal,
  rol,
  mortgages,
  onTypeChange,
  onAddressChange,
  onCommuneChange,
  onFiscalAppraisalChange,
  onRolChange,
  onMortgagesChange,
  onRemoveRow,
}) {
  return (
    <Tr>
      <Td>
        <Input value={type} onChange={(e) => onTypeChange(index, e)} />
      </Td>
      <Td>
        <Input value={address} onChange={(e) => onAddressChange(index, e)} />
      </Td>
      <Td>
        <Input value={commune} onChange={(e) => onCommuneChange(index, e)} />
      </Td>
      <Td>
        <Input
          value={fiscalAppraisal}
          onChange={(e) => onFiscalAppraisalChange(index, e)}
        />
      </Td>
      <Td>
        <Input value={rol} onChange={(e) => onRolChange(index, e)} />
      </Td>
      <Td>
        <MortgageInput
          value={mortgages}
          onChange={(value) => onMortgagesChange(index, value)}
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

function RealEstateDetail({ handleNextStep, setParentObject }) {
  const toast = useToast();
  const [rows, setRows] = useState([
    {
      type: '',
      address: '',
      commune: '',
      fiscalAppraisal: '',
      rol: '',
      mortgages: '',
    },
  ]);

  const handleTypeChange = (index, event) => {
    const updatedRows = [...rows];
    updatedRows[index].type = event.target.value;
    setRows(updatedRows);
  };

  const handleAddressChange = (index, event) => {
    const updatedRows = [...rows];
    updatedRows[index].address = event.target.value;
    setRows(updatedRows);
  };

  const handleCommuneChange = (index, event) => {
    const updatedRows = [...rows];
    updatedRows[index].commune = event.target.value;
    setRows(updatedRows);
  };

  const handleFiscalAppraisalChange = (index, event) => {
    const updatedRows = [...rows];
    updatedRows[index].fiscalAppraisal = event.target.value;
    setRows(updatedRows);
  };

  const handleRolChange = (index, event) => {
    const updatedRows = [...rows];
    updatedRows[index].rol = event.target.value;
    setRows(updatedRows);
  };

  const handleMortgagesChange = (index, value) => {
    const updatedRows = [...rows];
    updatedRows[index].mortgages = value;
    setRows(updatedRows);
  };

  const handleAddRow = () => {
    const newRow = {
      type: '',
      address: '',
      commune: '',
      fiscalAppraisal: '',
      rol: '',
      mortgages: '',
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
    const realEstateDetails = rows.reduce(
      (acc, row, index) => ({
        ...acc,
        [index + 1]: { ...row },
      }),
      {}
    );
    setParentObject((prevObject) => ({
      ...prevObject,
      realEstateDetails,
    }));
    toast({
      title: 'Form Submitted',
      description: 'Real Estate Details saved successfully.',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
    handleNextStep();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={4}>
        <FormControl id='realEstateDetails'>
          <Table>
            <Thead>
              <Tr>
                <Th>Type</Th>
                <Th>Address</Th>
                <Th>Commune</Th>
                <Th>Fiscal Appraisal</Th>
                <Th>ROL</Th>
                <Th>Mortgages (Yes/No)</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {rows.map((row, index) => (
                <RealEstateDetailRow
                  key={index}
                  index={index}
                  type={row.type}
                  address={row.address}
                  commune={row.commune}
                  fiscalAppraisal={row.fiscalAppraisal}
                  rol={row.rol}
                  mortgages={row.mortgages}
                  onTypeChange={handleTypeChange}
                  onAddressChange={handleAddressChange}
                  onCommuneChange={handleCommuneChange}
                  onFiscalAppraisalChange={handleFiscalAppraisalChange}
                  onRolChange={handleRolChange}
                  onMortgagesChange={handleMortgagesChange}
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

export default RealEstateDetail;

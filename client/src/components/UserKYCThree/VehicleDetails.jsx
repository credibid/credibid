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

function PledgedInput({ value, onChange }) {
  return (
    <RadioGroup value={value} onChange={onChange}>
      <HStack align='start'>
        <Radio value='yes'>Yes</Radio>
        <Radio value='no'>No</Radio>
      </HStack>
    </RadioGroup>
  );
}

function VehicleDetailsRow({
  index,
  type,
  brand,
  model,
  numberPlate,
  fiscalAppraisal,
  pledged,
  onTypeChange,
  onBrandChange,
  onModelChange,
  onNumberPlateChange,
  onFiscalAppraisalChange,
  onPledgedChange,
  onRemoveRow,
}) {
  return (
    <Tr>
      <Td>
        <Input value={type} onChange={(e) => onTypeChange(index, e)} />
      </Td>
      <Td>
        <Input value={brand} onChange={(e) => onBrandChange(index, e)} />
      </Td>
      <Td>
        <Input value={model} onChange={(e) => onModelChange(index, e)} />
      </Td>
      <Td>
        <Input
          value={numberPlate}
          onChange={(e) => onNumberPlateChange(index, e)}
        />
      </Td>
      <Td>
        <Input
          value={fiscalAppraisal}
          onChange={(e) => onFiscalAppraisalChange(index, e)}
        />
      </Td>
      <Td>
        <PledgedInput
          value={pledged}
          onChange={(value) => onPledgedChange(index, value)}
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

function VehicleDetails({ handleNextStep, setParentObject }) {
  const toast = useToast();
  const [rows, setRows] = useState([
    {
      type: '',
      brand: '',
      model: '',
      numberPlate: '',
      fiscalAppraisal: '',
      pledged: '',
    },
  ]);

  const handleTypeChange = (index, event) => {
    const updatedRows = [...rows];
    updatedRows[index].type = event.target.value;
    setRows(updatedRows);
  };

  const handleBrandChange = (index, event) => {
    const updatedRows = [...rows];
    updatedRows[index].brand = event.target.value;
    setRows(updatedRows);
  };

  const handleModelChange = (index, event) => {
    const updatedRows = [...rows];
    updatedRows[index].model = event.target.value;
    setRows(updatedRows);
  };

  const handleNumberPlateChange = (index, event) => {
    const updatedRows = [...rows];
    updatedRows[index].numberPlate = event.target.value;
    setRows(updatedRows);
  };

  const handleFiscalAppraisalChange = (index, event) => {
    const updatedRows = [...rows];
    updatedRows[index].fiscalAppraisal = event.target.value;
    setRows(updatedRows);
  };

  const handlePledgedChange = (index, value) => {
    const updatedRows = [...rows];
    updatedRows[index].pledged = value;
    setRows(updatedRows);
  };

  const handleAddRow = () => {
    const newRow = {
      type: '',
      brand: '',
      model: '',
      numberPlate: '',
      fiscalAppraisal: '',
      pledged: '',
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
    const vehicleDetails = rows.reduce(
      (acc, row, index) => ({
        ...acc,
        [index + 1]: { ...row },
      }),
      {}
    );
    setParentObject((prevObject) => ({
      ...prevObject,
      vehicleDetails,
    }));
    toast({
      title: 'Form Submitted',
      description: 'Vehicle Details saved successfully.',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
    handleNextStep();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={4}>
        <FormControl id='vehicleDetails'>
          <Table>
            <Thead>
              <Tr>
                <Th>Type</Th>
                <Th>Brand</Th>
                <Th>Model</Th>
                <Th>Number Plate</Th>
                <Th>Fiscal Appraisal</Th>
                <Th>Pledged (Yes/No)</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {rows.map((row, index) => (
                <VehicleDetailsRow
                  key={index}
                  index={index}
                  type={row.type}
                  brand={row.brand}
                  model={row.model}
                  numberPlate={row.numberPlate}
                  fiscalAppraisal={row.fiscalAppraisal}
                  pledged={row.pledged}
                  onTypeChange={handleTypeChange}
                  onBrandChange={handleBrandChange}
                  onModelChange={handleModelChange}
                  onNumberPlateChange={handleNumberPlateChange}
                  onFiscalAppraisalChange={handleFiscalAppraisalChange}
                  onPledgedChange={handlePledgedChange}
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

export default VehicleDetails;

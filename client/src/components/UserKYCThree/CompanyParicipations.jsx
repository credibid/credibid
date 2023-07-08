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
  Tfoot,
} from '@chakra-ui/react';

function CompanyParticipationsRow({
  index,
  name,
  identifyingNumber,
  constitutionYear,
  percentage,
  value,
  onNameChange,
  onIdentifyingNumberChange,
  onConstitutionYearChange,
  onPercentageChange,
  onValueChange,
  onRemoveRow,
}) {
  return (
    <Tr>
      <Td>
        <Input value={name} onChange={(e) => onNameChange(index, e)} />
      </Td>
      <Td>
        <Input
          value={identifyingNumber}
          onChange={(e) => onIdentifyingNumberChange(index, e)}
        />
      </Td>
      <Td>
        <Input
          value={constitutionYear}
          onChange={(e) => onConstitutionYearChange(index, e)}
        />
      </Td>
      <Td>
        <Input
          value={percentage}
          onChange={(e) => onPercentageChange(index, e)}
        />
      </Td>
      <Td>
        <Input value={value} onChange={(e) => onValueChange(index, e)} />
      </Td>
      <Td>
        <Button colorScheme='red' size='sm' onClick={() => onRemoveRow(index)}>
          Remove
        </Button>
      </Td>
    </Tr>
  );
}

function CompanyParticipations({ handleNextStep, setParentObject }) {
  const toast = useToast();
  const [rows, setRows] = useState([
    {
      name: '',
      identifyingNumber: '',
      constitutionYear: '',
      percentage: '',
      value: '',
    },
  ]);

  const handleNameChange = (index, event) => {
    const updatedRows = [...rows];
    updatedRows[index].name = event.target.value;
    setRows(updatedRows);
  };

  const handleIdentifyingNumberChange = (index, event) => {
    const updatedRows = [...rows];
    updatedRows[index].identifyingNumber = event.target.value;
    setRows(updatedRows);
  };

  const handleConstitutionYearChange = (index, event) => {
    const updatedRows = [...rows];
    updatedRows[index].constitutionYear = event.target.value;
    setRows(updatedRows);
  };

  const handlePercentageChange = (index, event) => {
    const updatedRows = [...rows];
    updatedRows[index].percentage = event.target.value;
    setRows(updatedRows);
  };

  const handleValueChange = (index, event) => {
    const updatedRows = [...rows];
    updatedRows[index].value = event.target.value;
    setRows(updatedRows);
  };

  const handleAddRow = () => {
    const newRow = {
      name: '',
      identifyingNumber: '',
      constitutionYear: '',
      percentage: '',
      value: '',
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
    const companyParticipations = rows.reduce(
      (acc, row, index) => ({
        ...acc,
        [index + 1]: { ...row },
      }),
      {}
    );
    setParentObject((prevObject) => ({
      ...prevObject,
      companyParticipations,
    }));
    toast({
      title: 'Form Submitted',
      description: 'Company Participations data saved successfully.',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
    handleNextStep();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={4}>
        <FormControl id='companyParticipations'>
          <Table>
            <Thead>
              <Tr>
                <Th>Name of the Society</Th>
                <Th>Identifying Number</Th>
                <Th>Company Constitution Year</Th>
                <Th>%</Th>
                <Th>Participation Value ($)</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {rows.map((row, index) => (
                <CompanyParticipationsRow
                  key={index}
                  index={index}
                  name={row.name}
                  identifyingNumber={row.identifyingNumber}
                  constitutionYear={row.constitutionYear}
                  percentage={row.percentage}
                  value={row.value}
                  onNameChange={handleNameChange}
                  onIdentifyingNumberChange={handleIdentifyingNumberChange}
                  onConstitutionYearChange={handleConstitutionYearChange}
                  onPercentageChange={handlePercentageChange}
                  onValueChange={handleValueChange}
                  onRemoveRow={handleRemoveRow}
                />
              ))}
            </Tbody>
            <Tfoot>
              <Tr>
                <Td colSpan={6}>
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

export default CompanyParticipations;

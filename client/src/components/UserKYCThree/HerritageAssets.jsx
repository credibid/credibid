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

function AssetRow({
  label,
  number,
  value,
  mortgage,
  onNumberChange,
  onChange,
  onMortgageChange,
}) {
  return (
    <Tr>
      <Td>{label}</Td>
      <Td>
        <Input
          type='number'
          value={number}
          onChange={onNumberChange}
          size='sm'
          borderColor={'gray.200'}
          rounded={'md'}
        />
      </Td>
      <Td>
        <Input
          type='number'
          value={value}
          onChange={onChange}
          size='sm'
          borderColor={'gray.200'}
          rounded={'md'}
        />
      </Td>
      <Td>
        <MortgagePledgeInput
          value={mortgage}
          onChange={onMortgageChange}
          borderColor={'blue.200'}
        />
      </Td>
    </Tr>
  );
}

const HerritageAssets = ({ handleNextStep, setParentObject }) => {
  const toast = useToast();
  const [assets, setAssets] = useState({
    savings: { number: '', value: '', mortgage: '' },
    actions: { number: '', value: '', mortgage: '' },
    financialInversions: { number: '', value: '', mortgage: '' },
    participation: { number: '', value: '', mortgage: '' },
    realEstate: { number: '', value: '', mortgage: '' },
    vehicles: { number: '', value: '', mortgage: '' },
    otherAssets: { number: '', value: '', mortgage: '' },
  });

  const handleNumberChange = (asset, event) => {
    setAssets((prevAssets) => ({
      ...prevAssets,
      [asset]: { ...prevAssets[asset], number: event.target.value },
    }));
  };

  const handleChange = (asset, event) => {
    setAssets((prevAssets) => ({
      ...prevAssets,
      [asset]: { ...prevAssets[asset], value: event.target.value },
    }));
  };

  const handleMortgageChange = (asset, value) => {
    setAssets((prevAssets) => ({
      ...prevAssets,
      [asset]: { ...prevAssets[asset], mortgage: value },
    }));
  };

  const calculateTotal = () => {
    let totalNumber = 0;
    let totalValue = 0;

    for (const asset of Object.values(assets)) {
      totalNumber += Number(asset.number);
      totalValue += Number(asset.value);
    }

    return { totalNumber, totalValue };
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setParentObject((prevObject) => ({
      ...prevObject,
      assets,
    }));

    handleNextStep();
  };
  const { totalNumber, totalValue } = calculateTotal();

  return (
    <form onSubmit={onSubmit}>
      <Stack spacing={0}>
        <Table>
          <Thead>
            <Tr>
              <Th>Asset Type</Th>
              <Th>N°</Th>
              <Th>Value ($)</Th>
              <Th>Mortgage/Pledge (YES/NO)</Th>
            </Tr>
          </Thead>
          <Tbody>
            <AssetRow
              label='Savings/Term deposits'
              number={assets.savings.number}
              value={assets.savings.value}
              mortgage={assets.savings.mortgage}
              onNumberChange={(e) => handleNumberChange('savings', e)}
              onChange={(e) => handleChange('savings', e)}
              onMortgageChange={(value) =>
                handleMortgageChange('savings', value)
              }
            />
            <AssetRow
              label='Actions'
              number={assets.actions.number}
              value={assets.actions.value}
              mortgage={assets.actions.mortgage}
              onNumberChange={(e) => handleNumberChange('actions', e)}
              onChange={(e) => handleChange('actions', e)}
              onMortgageChange={(value) =>
                handleMortgageChange('actions', value)
              }
            />
            <AssetRow
              label='Financial Inversions (Mutual Funds)'
              number={assets.financialInversions.number}
              value={assets.financialInversions.value}
              mortgage={assets.financialInversions.mortgage}
              onNumberChange={(e) =>
                handleNumberChange('financialInversions', e)
              }
              onChange={(e) => handleChange('financialInversions', e)}
              onMortgageChange={(value) =>
                handleMortgageChange('financialInversions', value)
              }
            />
            <AssetRow
              label='Participation in Companies'
              number={assets.participation.number}
              value={assets.participation.value}
              mortgage={assets.participation.mortgage}
              onNumberChange={(e) => handleNumberChange('participation', e)}
              onChange={(e) => handleChange('participation', e)}
              onMortgageChange={(value) =>
                handleMortgageChange('participation', value)
              }
            />
            <AssetRow
              label='Real Estate'
              number={assets.realEstate.number}
              value={assets.realEstate.value}
              mortgage={assets.realEstate.mortgage}
              onNumberChange={(e) => handleNumberChange('realEstate', e)}
              onChange={(e) => handleChange('realEstate', e)}
              onMortgageChange={(value) =>
                handleMortgageChange('realEstate', value)
              }
            />
            <AssetRow
              label='Vehicles Other'
              number={assets.vehicles.number}
              value={assets.vehicles.value}
              mortgage={assets.vehicles.mortgage}
              onNumberChange={(e) => handleNumberChange('vehicles', e)}
              onChange={(e) => handleChange('vehicles', e)}
              onMortgageChange={(value) =>
                handleMortgageChange('vehicles', value)
              }
            />
            <AssetRow
              label='Other Assets'
              number={assets.otherAssets.number}
              value={assets.otherAssets.value}
              mortgage={assets.otherAssets.mortgage}
              onNumberChange={(e) => handleNumberChange('otherAssets', e)}
              onChange={(e) => handleChange('otherAssets', e)}
              onMortgageChange={(value) =>
                handleMortgageChange('otherAssets', value)
              }
            />
          </Tbody>
          <Tfoot bgColor={'green.100'}>
            <Tr>
              <Th>Total Assets</Th>
              <Th>{totalNumber}</Th>
              <Th>{totalValue}</Th>
              <Th></Th>
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

export default HerritageAssets;

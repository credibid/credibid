import React from 'react';
import { Table, Tbody, Tr, Td, Heading, Flex } from '@chakra-ui/react';

const WorkDetails = ({ workKyc }) => {
  if (!workKyc) {
    return null;
  }

  const {
    employmentBackground,
    previousEmployment,
    bankReferences,
    partnerData,
    partnerEmploymentBg,
    partnerAddress,
  } = workKyc;

  return (
    <>
      {/* Employment Background */}
      {employmentBackground && (
        <>
          <Heading as='h2' size='md' mt={4}>
            Employment Background
          </Heading>
          <Table variant='simple' size='sm'>
            <Tbody>
              <Tr>
                <Td>Dependent</Td>
                <Td>{employmentBackground.dependent}</Td>
              </Tr>
              <Tr>
                <Td>Employer Number</Td>
                <Td>{employmentBackground.emloyerNumber}</Td>
              </Tr>
              {/* Rest of the table rows */}
            </Tbody>
          </Table>
        </>
      )}

      {/* Previous Employment */}
      {previousEmployment && (
        <>
          <Heading as='h2' size='md' mt={4}>
            Previous Employment
          </Heading>
          <Table variant='simple' size='sm'>
            <Tbody>
              <Tr>
                <Td>Employer Number</Td>
                <Td>{previousEmployment.emloyerNumber}</Td>
              </Tr>
              {/* Rest of the table rows */}
            </Tbody>
          </Table>
        </>
      )}

      {/* Bank References */}
      {bankReferences && (
        <>
          <Heading as='h2' size='md' mt={4}>
            Bank References
          </Heading>
          <Table variant='simple' size='sm'>
            <Tbody>
              <Tr>
                <Td>Bank Name</Td>
                <Td>{bankReferences.bankName}</Td>
              </Tr>
              {/* Rest of the table rows */}
            </Tbody>
          </Table>
        </>
      )}

      {/* Partner Data */}
      {partnerData && (
        <>
          <Heading as='h2' size='md' mt={4}>
            Partner Data
          </Heading>
          <Table variant='simple' size='sm'>
            <Tbody>
              <Tr>
                <Td>Client RUT</Td>
                <Td>{partnerData.clientRUT}</Td>
              </Tr>
              {/* Rest of the table rows */}
            </Tbody>
          </Table>
        </>
      )}

      {/* Partner Employment Background */}
      {partnerEmploymentBg && (
        <>
          <Heading as='h2' size='md' mt={4}>
            Partner Employment Background
          </Heading>
          <Table variant='simple' size='sm'>
            <Tbody>
              <Tr>
                <Td>Dependent</Td>
                <Td>{partnerEmploymentBg.dependent}</Td>
              </Tr>
              {/* Rest of the table rows */}
            </Tbody>
          </Table>
        </>
      )}

      {/* Partner Address */}
      {partnerAddress && (
        <>
          <Heading as='h2' size='md' mt={4}>
            Partner Address
          </Heading>
          <Table variant='simple' size='sm'>
            <Tbody>
              <Tr>
                <Td>Street</Td>
                <Td>{partnerAddress.street}</Td>
              </Tr>
              {/* Rest of the table rows */}
            </Tbody>
          </Table>
        </>
      )}
    </>
  );
};

export default WorkDetails;

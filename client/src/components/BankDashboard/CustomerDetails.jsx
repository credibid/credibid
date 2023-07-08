import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Link,
  Box,
  Stack,
  Button,
} from '@chakra-ui/react';

const CustomerDetails = ({ userData }) => {
  return (
    <Stack>
      <Table variant='simple' className='printable-table'>
        <Tbody>
          <Tr>
            <Td>First Name</Td>
            <Td>{userData.firstName}</Td>
          </Tr>
          <Tr>
            <Td>Last Name</Td>
            <Td>{userData.lastName}</Td>
          </Tr>
          <Tr>
            <Td>Celular</Td>
            <Td>{userData.celular}</Td>
          </Tr>
          <Tr>
            <Td>Gender</Td>
            <Td>{userData.gender}</Td>
          </Tr>
          <Tr>
            <Td>Dependants</Td>
            <Td>{userData.dependants}</Td>
          </Tr>
          <Tr>
            <Td>Nationality</Td>
            <Td>{userData.nationality}</Td>
          </Tr>
          <Tr>
            <Td>Civil Status</Td>
            <Td>{userData.civilStatus}</Td>
          </Tr>
          <Tr>
            <Td>Conjugal Regime</Td>
            <Td>{userData.conjugalRegime}</Td>
          </Tr>
          <Tr>
            <Td>Number of Sons</Td>
            <Td>{userData.numberOfSons}</Td>
          </Tr>
          <Tr>
            <Td>Number of Cargas</Td>
            <Td>{userData.numberOfCargas}</Td>
          </Tr>
          <Tr>
            <Td>Housing Type</Td>
            <Td>{userData.housingType}</Td>
          </Tr>
          <Tr>
            <Td>Education Level</Td>
            <Td>{userData.educationLevel}</Td>
          </Tr>
          <Tr>
            <Td>University</Td>
            <Td>{userData.university}</Td>
          </Tr>
          <Tr>
            <Td>Profession</Td>
            <Td>{userData.profession}</Td>
          </Tr>
          <Tr>
            <Td>Particular Address</Td>
            <Td>
              <Table variant='simple'>
                <Tbody>
                  <Tr>
                    <Td>Street</Td>
                    <Td>{userData.particularAddress.street}</Td>
                  </Tr>
                  <Tr>
                    <Td>Number</Td>
                    <Td>{userData.particularAddress.number}</Td>
                  </Tr>
                  <Tr>
                    <Td>House</Td>
                    <Td>{userData.particularAddress.house}</Td>
                  </Tr>
                  <Tr>
                    <Td>Department</Td>
                    <Td>{userData.particularAddress.department}</Td>
                  </Tr>
                  <Tr>
                    <Td>Community</Td>
                    <Td>{userData.particularAddress.community}</Td>
                  </Tr>
                  <Tr>
                    <Td>City</Td>
                    <Td>{userData.particularAddress.city}</Td>
                  </Tr>
                  <Tr>
                    <Td>Region</Td>
                    <Td>{userData.particularAddress.region}</Td>
                  </Tr>
                </Tbody>
              </Table>
            </Td>
          </Tr>
          <Tr>
            <Td>Documents</Td>
            <Td>
              <Box display='flex' flexDirection='column'>
                {userData.documents.map((document) => (
                  <Box
                    key={document._id}
                    mb={2}
                    display='flex'
                    alignItems='center'>
                    <img
                      src={document.link}
                      alt={document.name}
                      height='50'
                      width='50'
                    />
                    <span style={{ marginLeft: '8px' }}>{document.name}</span>
                  </Box>
                ))}
              </Box>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </Stack>
  );
};

export default CustomerDetails;

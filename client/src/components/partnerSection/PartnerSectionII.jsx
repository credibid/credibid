import React from 'react'
import {
    Box,
    Center,
    Text,
    Stack,
    List,
    ListItem,
    ListIcon,
    Button,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { CheckIcon } from '@chakra-ui/icons';

const PartnerSectionII = ({title, facilities, buttonText, subTitle}) => {
  return (
    <Center py={6}>
      <Box
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>
        <Stack
          textAlign={'center'}
          p={6}
          color={useColorModeValue('gray.800', 'white')}
          align={'center'}>
          {/* <Text
            fontSize={'sm'}
            fontWeight={500}
            bg={useColorModeValue('green.50', 'green.900')}
            p={2}
            px={3}
            color={'green.500'}
            rounded={'full'}>
            Hobby
          </Text> */}
          <Stack direction={'row'} align={'center'} justify={'center'}>
            {/* <Text fontSize={'3xl'}>$</Text> */}
            <Text fontSize={'2xl'} fontWeight={600}>
              {title}
            </Text>
            {/* <Text color={'gray.500'}>/month</Text> */}
          </Stack>
        </Stack>
        <Text
            fontSize={'sm'}
            fontWeight={500}
            bg={useColorModeValue('blue.50', 'blue.900')}
            p={2}
            px={3}
            color={'blue.500'}
            // rounded={'full'}
            >
            {subTitle}
          </Text>

        <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
          <List spacing={3}>
            {facilities && facilities.map ((facility)=>{
                return (
                <ListItem>
                    <ListIcon as={CheckIcon} color="green.400" />
                    {facility}
                  </ListItem>
                  )
            })}
          </List>

          <Button
            mt={10}
            w={'full'}
            bg={'blue.400'}
            color={'white'}
            rounded={'xl'}
            boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
            _hover={{
              bg: 'blue.500',
            }}
            _focus={{
              bg: 'blue.500',
            }}>
            {buttonText}
          </Button>
        </Box>
      </Box>
    </Center>
  )
}

export default PartnerSectionII
import React from 'react'
import { SimpleGrid, Text, Container,
        Box,
        Center,
        Flex
 } from '@chakra-ui/react'
 import PartnerSectionII from './PartnerSectionII'

const PartnerSection = () => {
  return (
    <Box>
        <Container pt={50}>
            <Center>
            <Text 
            pb={10}
            fontSize={{ base: '2xl', md: '5xl' }}
            fontWeight={700}
            color={'blue.500'}
            >QUIERES SER SOCIO?</Text>
            </Center>
        </Container>
        <SimpleGrid columns={2}>
        <Box>
            <PartnerSectionII title={'Looking to grow your client profile ?'} facilities={['Best Mortgage Credit', 'Broker Hipotecario', 'Corredor Hipotecario']} buttonText={'Register as a member'} subTitle={'Join our perpouse of offering our clients the best mortgage credit'}></PartnerSectionII>
        </Box>
        <Box>
            <PartnerSectionII title={'Interested in our solution ?'} facilities={['Builder/Developer', 'Real estate broker', 'Finding the Finance']} buttonText={'Register as a special customer'} subTitle={'We know that the sale depends on the customer accepting and finding the financing'}></PartnerSectionII>
        </Box>
        </SimpleGrid>
    </Box>
  )
}

export default PartnerSection
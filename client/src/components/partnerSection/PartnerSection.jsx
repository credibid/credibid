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
        <Text 
        pb={10}
        fontSize={{ base: '2xl', md: '4xl' }}
        fontWeight={700}
        color={'blue.500'}
        >QUIERES SER SOCIO?</Text>
        <SimpleGrid columns={2}>
        <Box>
            <PartnerSectionII title={'Looking to grow your client profile ?'} facilities={['Best Mortgage Credit', 'Broker Hipotecario', 'Corredor Hipotecario']} buttonText={'Register as a member'} subTitle={'Join our perpouse of offering our clients the best mortgage credit'}></PartnerSectionII>
        </Box>
        <Box>
            <PartnerSectionII title={'Interested in our solution ?'} facilities={['Builder/Developer', 'Real estate broker', 'Finding the Finance']} buttonText={'Register as a special customer'} subTitle={'We know that the sale depends on the customer accepting and finding the financing'}></PartnerSectionII>
        </Box>
        {/* <Box>
            <Flex height={50}  bg='purple.600' color='white' display="flex" alignItems={'center'} justifyContent={'center'} alignContent={'center'}>
                <Center display="flex" alignItems={"center"}>
                    <Text align={'center'} alignItems={'center'}>Te interesa nuestra solucion?</Text>
                </Center>
            </Flex>
            
            <Text align={'center'}>Sabemos que la venta depende de quel el cliente acepte y que encuentre el financiamiento</Text>
            <SimpleGrid columns={2} spacing={20}>
                <Box bg='teal' >dfgdf</Box>
                <Box bg='teal' >dfgdfg</Box>
            </SimpleGrid>
            <Container height={50}  bg='#D9D9D9' color='black' alignContent={'center'}>
                <Center>
                    <Text fontWeight={'500'} align={'center'}>Te interesa nuestra solucion?</Text>
                </Center>
            </Container>
        </Box> */}
        </SimpleGrid>
    </Box>
  )
}

export default PartnerSection
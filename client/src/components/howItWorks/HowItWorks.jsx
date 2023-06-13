import React from 'react'
import './HowItWorks.css'
import { SimpleGrid, Text, Container,
    Box,
    Center,
    Flex,
    Card
} from '@chakra-ui/react'
import PartnerSectionII from '../partnerSection/PartnerSectionII'
import DetailsCard from './detailsCard/DetailsCard'

const HowItWorks = () => {
  return (
    <Box>
        <Container pt={50}>
            <Center>
            <Text 
        pb={10}
        // pl={'10vw'}
        fontSize={{ base: '2xl', md: '5xl' }}
        fontWeight={700}
        color={'blue.500'}
        >COMO FUNCIONA?</Text>
            </Center>
        </Container>
        <SimpleGrid columns={3} spacing={20} p={20}>
        <Box>
            <div className='step_card'>
                <Card borderRadius={35} h={'50vh'} >
                    {/* <Container>
                        <Center><Card bg={'red'} h={30} w={80}></Card></Center>
                    </Container> */}
                    <Box 
                    mt={20}
                    ml={10}
                    className='step' 
                    >
                    <Box className='round_step'><Center><Text color={'#345BA9'} fontSize={50} fontWeight={700}>1</Text></Center></Box>
                    <Box className='step_title'><Center><Text color={'white'} fontSize={25} fontWeight={400}>REGISTRO</Text></Center></Box>

                    </Box>
                   <Box ml={5} mt={20}>
                   <DetailsCard title={'Llena tu informacion'} description={'Las cotizaciones iniciaran una vez que ayas cargado toda tu informacion y yparticiparan bancos y brokes.'} ></DetailsCard>
                   </Box>
                </Card>
            </div>
        </Box>
        <Box>
            <div className='step_card'>
                <Card borderRadius={35} h={'50vh'} >
                <Box 
                    mt={20}
                    ml={10}
                    className='step' 
                    >
                    <Box className='round_step'><Center><Text color={'#345BA9'} fontSize={50} fontWeight={700}>2</Text></Center></Box>
                    <Box className='step_title'><Center><Text color={'white'} fontSize={25} fontWeight={400}>OFERTAS</Text></Center></Box>

                    </Box>
                    <Box ml={5} mt={20}>
                    <DetailsCard title={'Accede a las ofertas'} description={'Desde el momento uno en que tengas una oferta te lleara un correo para que la puedas visualizar'} ></DetailsCard>
                </Box>
                </Card>
            </div>
        </Box>
        <Box>
            <div className='step_card'>
                <Card borderRadius={35} h={'50vh'} >
                <Box 
                    mt={20}
                    ml={10}
                    className='step' 
                    >
                    <Box className='round_step'><Center><Text color={'#345BA9'} fontSize={50} fontWeight={700}>3</Text></Center></Box>
                    <Box className='step_title'><Center><Text color={'white'} fontSize={25} fontWeight={400}>ELIGE</Text></Center></Box>

                    </Box>
                    <Box ml={5} mt={20}>
                  <DetailsCard title={'Seleccions tu prefercencia'} description={'Podras elegir la opcion que se ajuste a tu presupuesto, plazo, tasa.'} ></DetailsCard>
                </Box>
                </Card>
            </div>
        </Box>
        </SimpleGrid>
    </Box>
  )
}

export default HowItWorks
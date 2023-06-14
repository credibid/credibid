import React from 'react'
import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Link,
    Badge,
    useColorModeValue,
    FormLabel,
    Input
  } from '@chakra-ui/react';
  import axios from "axios";
  import './UploaderCard.css'

const UploaderCard = ({title}) => {
    const cloudinaryAPIUrl = "https://api.cloudinary.com/v1_1/dftfcxnxd";
    const [docFile, setDocFile] = React.useState('')

    const handleFileUpload = (e) =>{
        setDocFile(e.target.files[0])
    }
    const uploadDocFile = async () =>{
        const formData = new FormData();
        formData.append("file", docFile);
        formData.append("upload_preset", "horen123");
        formData.append("cloud_name", "dftfcxnxd");
        const res = await axios.post(`${cloudinaryAPIUrl}/image/upload`, formData);  
        console.log(res.data.secure_url) 
    }

    return (
        <Center py={6}>
          <Box
            maxW={'320px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            rounded={'lg'}
            p={6}
            textAlign={'center'}>
            <Avatar
              size={'xl'}
              src={
                'https://res.cloudinary.com/dftfcxnxd/image/upload/v1686652595/314777_inbox_upload_icon_vzfer0.svg'
              }
              alt={'Avatar Alt'}
              mb={4}
              pos={'relative'}
            />
            <Heading fontSize={'2xl'} fontFamily={'body'}>
              {title}
            </Heading>

            <Stack mt={8} direction={'row'} spacing={4}>
            <Input className='upload_field' type='file' name='up_doc' id='up_doc' onChange={handleFileUpload}/>
              <Button
                flex={1}
                fontSize={'sm'}
                rounded={'full'}
                bg={'blue.400'}
                color={'white'}
                boxShadow={
                  '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                }
                _hover={{
                  bg: 'blue.500',
                }}
                _focus={{
                  bg: 'blue.500',
                }}
                onClick={uploadDocFile}
                >
                Subir
              </Button>
            </Stack>
          </Box>
        </Center>
      );
    }

export default UploaderCard
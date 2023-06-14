import React, { useEffect } from 'react';
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
  Input,
} from '@chakra-ui/react';
import axios from 'axios';
import './UploaderCard.css';
import { FaUpload } from 'react-icons/fa';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

const UploaderCard = ({ title, documents }) => {
  const cloudinaryAPIUrl = 'https://api.cloudinary.com/v1_1/dftfcxnxd';
  const [docFile, setDocFile] = React.useState('');
  const [docLink, setDocLink] = React.useState('');

  const handleFileUpload = (e) => {
    setDocFile(e.target.files[0]);
  };

  const uploadDocFile = async () => {
    const formData = new FormData();
    formData.append('file', docFile);
    formData.append('upload_preset', 'horen123');
    formData.append('cloud_name', 'dftfcxnxd');
    const res = await axios.post(`${cloudinaryAPIUrl}/image/upload`, formData);
    console.log(res.data.secure_url);
    setDocLink(res.data.secure_url);
    const data = {
      name: title,
      link: res.data.secure_url,
    };

    let idx = -1;
    documents.forEach((doc, i) => {
      if (doc.name === title) {
        idx = i;
      }
    });
    if (idx !== -1) {
      documents.splice(idx, 1);
    }

    documents.push(data);

    console.log(documents);
  };
  useEffect(() => {
    if (docFile) {
      uploadDocFile();
    }
  }, [docFile]);

  return (
    <Center py={6}>
      <Box
        maxW={'250px'}
        minH={'300px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'lg'}
        rounded={'xl'}
        p={6}
        textAlign={'center'}
        position={'relative'}>
        {/*make a done icon after upload complete */}
        {docLink && (
          <Box
            color={'green.500'}
            mb={4}
            position={'absolute'}
            right={'10px'}
            top={'5px'}>
            <IoMdCheckmarkCircleOutline size={'50'} />
          </Box>
        )}

        <Avatar
          size={'xl'}
          src={
            'https://res.cloudinary.com/dftfcxnxd/image/upload/v1686652595/314777_inbox_upload_icon_vzfer0.svg'
          }
          alt={'Avatar Alt'}
          mb={4}
          pos={'relative'}
        />
        <Heading fontSize={'lg'} fontFamily={'body'}>
          {title}
        </Heading>

        <Stack mt={8} direction={'row'} spacing={4}>
          <input
            // className='upload_field'
            type='file'
            name='up_doc'
            id='up_doc'
            accept='image/*'
            onChange={handleFileUpload}
          />

          <Button
            // flex={3}
            fontSize={'lg'}
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
            onClick={uploadDocFile}>
            <FaUpload size={'40'} />{' '}
          </Button>
        </Stack>
        <Text fontSize={'md'} color={'gray.500'} mt={4}>
          {docFile?.name?.slice(0, 20)}
        </Text>
      </Box>
    </Center>
  );
};

export default UploaderCard;

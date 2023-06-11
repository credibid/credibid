import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import loginSvg from '../assets/login.svg';
import { FcGoogle } from 'react-icons/fc';
import MetaIcon from '../components/customIcons/MetaIcon';
import MultiStepForm from '../components/UserKYC/MultiStepForm';

const UserKYC = () => {
  return <MultiStepForm />;
};

export default UserKYC;

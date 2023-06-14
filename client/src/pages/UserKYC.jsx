import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Image,
  Input,
  Spinner,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import loginSvg from '../assets/login.svg';
import { FcGoogle } from 'react-icons/fc';
import MetaIcon from '../components/customIcons/MetaIcon';
import MultiStepForm from '../components/UserKYC/MultiStepForm';
import Layout from '../components/common/Layout';
import { useGetKycQuery } from '../features/user/userApi';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/common/Spinner';

const UserKYC = () => {
  const {
    data: kycData,
    isSuccess: kycSuccess,
    isError: kycError,
    error,
    isLoading,
  } = useGetKycQuery();
  const navigate = useNavigate();
  useEffect(() => {
    if (kycSuccess) {
      navigate('/kyc-submitted');
    }
  }, [kycSuccess]);

  return (
    <>
      {kycSuccess || isLoading ? (
        <Loader />
      ) : (
        <Layout>
          <MultiStepForm />
        </Layout>
      )}
    </>
  );
};

export default UserKYC;

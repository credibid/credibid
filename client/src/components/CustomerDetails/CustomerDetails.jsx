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
import { useGetKycQuery } from '../../features/user/userApi';
import Loader from '../common/Spinner';
import { useGetCustomerKycQuery } from '../../features/admin/admin';
import BasicDetails from './BasicDetails';
import WorkDetails from './WorkDetails';
import AssetsKycDetails from './AssetsDetails';

const CustomerDetails = ({ userId }) => {
  console.log(userId);
  const {
    data: userData,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useGetCustomerKycQuery(userId);
  console.log(userData);
  return (
    <>
      {isLoading && <Loader />}
      {isSuccess && (
        <Stack>
          <BasicDetails basicKyc={userData?.basicKyc} />
          <WorkDetails workKyc={userData?.worksKyc} />
          <AssetsKycDetails assetsKyc={userData?.assetsKyc} />
        </Stack>
      )}
    </>
  );
};

export default CustomerDetails;

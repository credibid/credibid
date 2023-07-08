import React, { useEffect } from 'react';
import Layout from '../components/common/Layout';
import { useGetKycQuery } from '../features/user/userApi';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/common/Spinner';
import BasicKycComponent from '../components/UserKYC/BasicKycComponent';

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
      console.log(kycData);
      if (kycData.basicKyc) navigate('/works-kyc');
    }
  }, [kycSuccess]);

  return (
    <>
      {kycData?.basicKyc || isLoading ? (
        <Loader />
      ) : (
        <Layout>
          <BasicKycComponent />
        </Layout>
      )}
    </>
  );
};

export default UserKYC;

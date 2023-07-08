import React, { useEffect } from 'react';
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

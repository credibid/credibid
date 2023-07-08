import React, { useEffect } from 'react';
import Layout from '../components/common/Layout';
import { useGetKycQuery } from '../features/user/userApi';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/common/Spinner';
import AssetsKycComponent from '../components/UserKYCThree/AssetsKyc';

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
      if (kycData.assetsKyc) navigate('/kyc-submitted');
    }
  }, [kycSuccess]);

  return (
    <>
      {kycData?.assetsKyc || isLoading ? (
        <Loader />
      ) : (
        <Layout>
          <AssetsKycComponent />
        </Layout>
      )}
    </>
  );
};

export default UserKYC;

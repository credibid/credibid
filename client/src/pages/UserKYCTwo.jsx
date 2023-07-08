import React, { useEffect } from 'react';
import Layout from '../components/common/Layout';
import { useGetKycQuery } from '../features/user/userApi';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/common/Spinner';
import AssetsKycComponent from '../components/UserKYCThree/AssetsKyc';
import WorksKycComponent from '../components/UserKYCTwo/WorksKyc';

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
      if (kycData.worksKyc !== null) navigate('/assets-kyc');
    }
  }, [kycSuccess]);

  return (
    <>
      {kycData?.worksKyc || isLoading ? (
        <Loader />
      ) : (
        <Layout>
          <WorksKycComponent />
        </Layout>
      )}
    </>
  );
};

export default UserKYC;

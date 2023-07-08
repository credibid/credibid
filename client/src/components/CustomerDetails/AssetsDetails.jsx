import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Heading } from '@chakra-ui/react';

const AssetsKycDetails = ({ assetsKyc }) => {
  if (!assetsKyc) {
    return null;
  }
  const {
    assets,
    passives,
    income,
    financialInvestment,
    companyParticipations,
    realEstateDetails,
    vehicleDetails,
    debtDetails,
  } = assetsKyc;

  const renderAssets = (assetType) => {
    const asset = assets[assetType];
    return (
      <Tr key={assetType}>
        <Td>{assetType}</Td>
        <Td>{asset.number}</Td>
        <Td>{asset.value}</Td>
        <Td>{asset.mortgage}</Td>
      </Tr>
    );
  };

  const renderPassives = (passiveType) => {
    const passive = passives[passiveType];
    return (
      <Tr key={passiveType}>
        <Td>{passiveType}</Td>
        <Td>{passive.amountDebt}</Td>
        <Td>{passive.monthlyPayment}</Td>
      </Tr>
    );
  };

  const renderFinancialInvestments = () => {
    return financialInvestment.map((investment) => (
      <Tr key={investment._id}>
        <Td>{investment.id}</Td>
        <Td>{investment.type}</Td>
        <Td>{investment.institution}</Td>
        <Td>{investment.value}</Td>
        <Td>{investment.pledge}</Td>
      </Tr>
    ));
  };

  const renderCompanyParticipations = () => {
    return companyParticipations.map((participation) => (
      <Tr key={participation._id}>
        <Td>{participation.id}</Td>
        <Td>{participation.name}</Td>
        <Td>{participation.identifyingNumber}</Td>
        <Td>{participation.constitutionYear}</Td>
        <Td>{participation.percentage}</Td>
        <Td>{participation.value}</Td>
      </Tr>
    ));
  };

  const renderRealEstateDetails = () => {
    return realEstateDetails.map((estate) => (
      <Tr key={estate._id}>
        <Td>{estate.id}</Td>
        <Td>{estate.type}</Td>
        <Td>{estate.address}</Td>
        <Td>{estate.commune}</Td>
        <Td>{estate.fiscalAppraisal}</Td>
        <Td>{estate.rol}</Td>
        <Td>{estate.mortgages}</Td>
      </Tr>
    ));
  };

  const renderVehicleDetails = () => {
    return vehicleDetails.map((vehicle) => (
      <Tr key={vehicle._id}>
        <Td>{vehicle.id}</Td>
        <Td>{vehicle.type}</Td>
        <Td>{vehicle.brand}</Td>
        <Td>{vehicle.model}</Td>
        <Td>{vehicle.numberPlate}</Td>
        <Td>{vehicle.fiscalAppraisal}</Td>
        <Td>{vehicle.pledged}</Td>
      </Tr>
    ));
  };

  const renderDebtDetails = () => {
    return debtDetails.map((debt) => (
      <Tr key={debt._id}>
        <Td>{debt.id}</Td>
        <Td>{debt.type}</Td>
        <Td>{debt.institution}</Td>
        <Td>{debt.monthlyPayment}</Td>
        <Td>{debt.totalDebt}</Td>
        <Td>{debt.finalMaturity}</Td>
        <Td>{debt.outstandingDebt}</Td>
      </Tr>
    ));
  };

  return (
    <>
      <Heading as='h2' size='md' mt={4}>
        Assets KYC Details
      </Heading>

      {/* Assets */}
      {assets && Object.keys(assets).length > 0 && (
        <Table variant='simple' size='sm' mt={4}>
          <Thead>
            <Tr>
              <Th>Type</Th>
              <Th>Number</Th>
              <Th>Value</Th>
              <Th>Mortgage</Th>
            </Tr>
          </Thead>
          <Tbody>
            {Object.keys(assets).map((assetType) => renderAssets(assetType))}
          </Tbody>
        </Table>
      )}

      {/* Passives */}
      {passives && Object.keys(passives).length > 0 && (
        <Table variant='simple' size='sm' mt={8}>
          <Thead>
            <Tr>
              <Th>Type</Th>
              <Th>Amount Debt</Th>
              <Th>Monthly Payment</Th>
            </Tr>
          </Thead>
          <Tbody>
            {Object.keys(passives).map((passiveType) =>
              renderPassives(passiveType)
            )}
          </Tbody>
        </Table>
      )}

      {/* Income */}
      {income &&
        (income.fixedRent || income.variableIncome || income.otherIncome) && (
          <Table variant='simple' size='sm' mt={8}>
            <Thead>
              <Tr>
                <Th>Source</Th>
                <Th>Amount</Th>
              </Tr>
            </Thead>
            <Tbody>
              {income.fixedRent && (
                <Tr>
                  <Td>Fixed Rent</Td>
                  <Td>{income.fixedRent}</Td>
                </Tr>
              )}
              {income.variableIncome && (
                <Tr>
                  <Td>Variable Income</Td>
                  <Td>{income.variableIncome}</Td>
                </Tr>
              )}
              {income.otherIncome && (
                <Tr>
                  <Td>Other Income</Td>
                  <Td>{income.otherIncome}</Td>
                </Tr>
              )}
            </Tbody>
          </Table>
        )}

      {/* Financial Investments */}
      {financialInvestment && financialInvestment.length > 0 && (
        <>
          <Heading as='h2' size='md' mt={8}>
            Financial Investments
          </Heading>
          <Table variant='simple' size='sm' mt={4}>
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Type</Th>
                <Th>Institution</Th>
                <Th>Value</Th>
                <Th>Pledge</Th>
              </Tr>
            </Thead>
            <Tbody>{renderFinancialInvestments()}</Tbody>
          </Table>
        </>
      )}

      {/* Company Participations */}
      {companyParticipations && companyParticipations.length > 0 && (
        <>
          <Heading as='h2' size='md' mt={8}>
            Company Participations
          </Heading>
          <Table variant='simple' size='sm' mt={4}>
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Name</Th>
                <Th>Identifying Number</Th>
                <Th>Constitution Year</Th>
                <Th>Percentage</Th>
                <Th>Value</Th>
              </Tr>
            </Thead>
            <Tbody>{renderCompanyParticipations()}</Tbody>
          </Table>
        </>
      )}

      {/* Real Estate Details */}
      {realEstateDetails && realEstateDetails.length > 0 && (
        <>
          <Heading as='h2' size='md' mt={8}>
            Real Estate Details
          </Heading>
          <Table variant='simple' size='sm' mt={4}>
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Type</Th>
                <Th>Address</Th>
                <Th>Commune</Th>
                <Th>Fiscal Appraisal</Th>
                <Th>ROL</Th>
                <Th>Mortgages</Th>
              </Tr>
            </Thead>
            <Tbody>{renderRealEstateDetails()}</Tbody>
          </Table>
        </>
      )}

      {/* Vehicle Details */}
      {vehicleDetails && vehicleDetails.length > 0 && (
        <>
          <Heading as='h2' size='md' mt={8}>
            Vehicle Details
          </Heading>
          <Table variant='simple' size='sm' mt={4}>
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Type</Th>
                <Th>Brand</Th>
                <Th>Model</Th>
                <Th>Number Plate</Th>
                <Th>Fiscal Appraisal</Th>
                <Th>Pledged</Th>
              </Tr>
            </Thead>
            <Tbody>{renderVehicleDetails()}</Tbody>
          </Table>
        </>
      )}

      {/* Debt Details */}
      {debtDetails && debtDetails.length > 0 && (
        <>
          <Heading as='h2' size='md' mt={8}>
            Debt Details
          </Heading>
          <Table variant='simple' size='sm' mt={4}>
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Type</Th>
                <Th>Institution</Th>
                <Th>Monthly Payment</Th>
                <Th>Total Debt</Th>
                <Th>Final Maturity</Th>
                <Th>Outstanding Debt</Th>
              </Tr>
            </Thead>
            <Tbody>{renderDebtDetails()}</Tbody>
          </Table>
        </>
      )}
    </>
  );
};

export default AssetsKycDetails;

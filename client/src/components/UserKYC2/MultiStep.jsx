import React, { useState } from "react";
import {
  Box,
  Stack,
  Text,
  Button,
  Collapse,
  Progress,
  useToast,
  HStack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import { FiCheckSquare } from "react-icons/fi";
import { useCreatekycMutation } from "../../features/user/userApi";
import EmploymentBg from "./EmploymentBG";
import PrevEmployment from "./PrevEmployment";
import BankInfo from "./BankInfo";
import PartnerData from "./PartnerData";
import PartnerEmploymentBg from "./PartnerEmploymentBg";
import PartnerAddress from "./PartnerAddress";

const MultiStep = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [parentObject, setParentObject] = useState({});
  const toast = useToast();

  const [createKYC, { data, isLoading, isError, error, isSuccess }] =
    useCreatekycMutation();
  const handleNextStep = () => {
    setCompletedSteps((prevCompletedSteps) => [
      ...prevCompletedSteps,
      currentStep,
    ]);
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleStepClick = (index) => {
    if (currentStep === index) {
      setCurrentStep(-1);
    } else {
      setCurrentStep(index);
    }
  };

  const isStepCompleted = (stepIndex) => {
    return completedSteps.includes(stepIndex);
  };

  const steps = [
    {
      label: "Step 1: Employment Background",
      component: (
        <EmploymentBg
          handleNextStep={handleNextStep}
          setParentObject={setParentObject}
        />
      ),
    },
    {
      label: "Step 2: Previous Employment",
      component: (
        <PrevEmployment
          handleNextStep={handleNextStep}
          setParentObject={setParentObject}
        />
      ),
    },
    {
      label: "Step 3: Bank Reference",
      component: <BankInfo />,
    },
    {
      label: "Step 4: Partner Data",
      component: <PartnerData />,
    },
    {
      label: "Step 5: Partner Employment Background",
      component: <PartnerEmploymentBg />,
    },
    {
      label: "Step 6: Partner Address",
      component: <PartnerAddress />,
    },
  ];

  const handleFormSubmit = () => {
    console.log(parentObject);
    // createKYC(parentObject);

    toast({
      title: "Success",
      description: "Form submitted successfully!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <HStack alignItems={"flex-start"} display={{ base: "block", md: "flex" }}>
      <Stack
        w={{ md: "70vw", base: "100vw" }}
        sx={{
          "@media print": {
            display: "none",
          },
        }}
      >
        <Box p={4}>
          <Progress
            value={(completedSteps.length / steps.length) * 100}
            mb={4}
          />

          <Stack spacing={4}>
            {steps.map((step, index) => (
              <Box
                key={index}
                borderWidth={1}
                borderRadius="md"
                borderColor="gray.200"
              >
                <Box
                  p={4}
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  cursor="pointer"
                  onClick={() => handleStepClick(index)}
                  bg={currentStep === index ? "blue.100" : ""}
                >
                  <Text fontWeight="bold">{step.label}</Text>
                  {isStepCompleted(index) && (
                    <HStack>
                      <Text color="green.500" fontWeight="bold">
                        <FiCheckSquare size={25} />
                      </Text>
                    </HStack>
                  )}
                </Box>

                <Collapse in={currentStep === index}>
                  <Box p={4}>{step.component}</Box>
                </Collapse>
              </Box>
            ))}
          </Stack>

          {currentStep === steps.length && (
            <Box mt={4}>
              <Button colorScheme="blue" onClick={handleFormSubmit} w={"full"}>
                Submit Form
              </Button>
            </Box>
          )}
        </Box>
      </Stack>

      <Stack
        w={{ md: "30vw", base: "100vw" }}
        top={0}
        right={0}
        mt={{ md: 4, base: 0 }}
        mr={4}
        px={{ md: 10, base: 2 }}
        alignItems={"flex-start"}
      >
        <Box
          p={4}
          shadow={"lg"}
          rounded={"xl"}
          w={"full"}
          minH={"90vh"}
          textAlign="center"
        >
          <Text
            fontSize="xl"
            fontWeight="bold"
            mb={4}
            pb={2}
            borderBottom={"2px solid lightgray"}
          >
            Preview
          </Text>
          {Object.entries(parentObject).length > 0 && (
            <Table variant="simple" textAlign={"left"}>
              <Thead>
                <Tr>
                  <Th>Property</Th>
                  <Th>Value</Th>
                </Tr>
              </Thead>
              <Tbody>
                {Object.entries(parentObject).map(([key, value]) => (
                  <Tr key={key}>
                    <Td>
                      {key.charAt(0).toUpperCase() +
                        key.slice(1).replace(/([A-Z])/g, " $1")}
                    </Td>
                    <Td>{value.charAt(0).toUpperCase() + value.slice(1)}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          )}
        </Box>
      </Stack>
    </HStack>
  );
};

export default MultiStep;

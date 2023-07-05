import React, { useState } from "react";
import {
  Stack,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  useToast,
} from "@chakra-ui/react";

const PrevEmployment = ({ handleNextStep, setParentObject }) => {
  const [previousEmployment, setPreviousEmployment] = useState({
    emloyerNumber: "",
    companyName: "",
    businessLine: "",
    economicActivity: "",
    startOfEmploymentDate: "",
    endOfEmploymentDate: "",
  });
  const toast = useToast();

  const onSubmit = (e) => {
    e.preventDefault();

    if (
      previousEmployment.emloyerNumber.trim() !== "" &&
      previousEmployment.companyName.trim() !== "" &&
      previousEmployment.businessLine.trim() !== "" &&
      previousEmployment.economicActivity.trim() !== "" &&
      previousEmployment.startOfEmploymentDate.trim() !== "" &&
      previousEmployment.endOfEmploymentDate.trim() !== ""
    ) {
      console.log("Previous Employment: ", previousEmployment);
    } else {
      toast({
        title: "Error",
        description: "Please fill in all the required fields.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <Stack spacing={4}>
        <FormControl>
          <FormLabel>Employer Number</FormLabel>
          <Input
            type="text"
            value={previousEmployment.emloyerNumber}
            onChange={(e) =>
              setPreviousEmployment({
                ...previousEmployment,
                emloyerNumber: e.target.value,
              })
            }
          />
        </FormControl>
        <FormControl>
          <FormLabel>Company Name</FormLabel>
          <Input
            type="text"
            value={previousEmployment.companyName}
            onChange={(e) =>
              setPreviousEmployment({
                ...previousEmployment,
                companyName: e.target.value,
              })
            }
          />
        </FormControl>
        <FormControl>
          <FormLabel>Business Line</FormLabel>
          <Input
            type="text"
            value={previousEmployment.businessLine}
            onChange={(e) =>
              setPreviousEmployment({
                ...previousEmployment,
                businessLine: e.target.value,
              })
            }
          />
        </FormControl>
        <FormControl>
          <FormLabel>Economic Activity</FormLabel>
          <Input
            type="text"
            value={previousEmployment.economicActivity}
            onChange={(e) =>
              setPreviousEmployment({
                ...previousEmployment,
                economicActivity: e.target.value,
              })
            }
          />
        </FormControl>
        <FormControl>
          <FormLabel>Start of Employment Date</FormLabel>
          <Input
            type="date"
            value={previousEmployment.startOfEmploymentDate}
            onChange={(e) =>
              setPreviousEmployment({
                ...previousEmployment,
                startOfEmploymentDate: e.target.value,
              })
            }
          />
        </FormControl>
        <FormControl>
          <FormLabel>End of Employment Date</FormLabel>
          <Input
            type="date"
            value={previousEmployment.endOfEmploymentDate}
            onChange={(e) =>
              setPreviousEmployment({
                ...previousEmployment,
                endOfEmploymentDate: e.target.value,
              })
            }
          />
        </FormControl>

        <Button colorScheme="blue" type="submit">
          Submit & Next
        </Button>
      </Stack>
    </form>
  );
};

export default PrevEmployment;

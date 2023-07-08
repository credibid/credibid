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

const EmploymentBg = ({ handleNextStep, setParentObject }) => {
  const [employmentBackground, setEmploymentBackground] = useState({
    dependent: "",
    emloyerNumber: "",
    companyName: "",
    economicActivity: "",
    startOfContractDate: "",
    position: "",
    monthlyIncome: "",
  });

  const toast = useToast();

  const onSubmit = (e) => {
    e.preventDefault();

    if (employmentBackground.dependent === "independent") {
      if (
        employmentBackground.economicActivity.trim() !== "" &&
        employmentBackground.startOfContractDate.trim() !== "" &&
        employmentBackground.monthlyIncome.trim() !== ""
      )
        setParentObject((prevObject) => ({
          ...prevObject,
          employmentBackground,
        }));
      handleNextStep();
    } else if (employmentBackground.dependent === "dependent") {
      if (
        employmentBackground.emloyerNumber.trim() !== "" &&
        employmentBackground.companyName.trim() !== "" &&
        employmentBackground.economicActivity.trim() !== "" &&
        employmentBackground.startOfContractDate.trim() !== "" &&
        employmentBackground.position.trim() !== "" &&
        employmentBackground.monthlyIncome.trim() !== ""
      )
        setParentObject((prevObject) => ({
          ...prevObject,
          employmentBackground,
        }));
      handleNextStep();
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
          <FormLabel>Are you a dependent or independent?</FormLabel>
          <Select
            value={employmentBackground.dependent}
            onChange={(e) =>
              setEmploymentBackground({
                ...employmentBackground,
                dependent: e.target.value,
              })
            }
          >
            <option value="">Select Dependent or Independent</option>
            <option value="dependent">Dependent</option>
            <option value="independent">Independent</option>
          </Select>
        </FormControl>
        <FormControl>
          {employmentBackground.dependent === "dependent" ? (
            <>
              <FormLabel>Unique identification number employer</FormLabel>
              <Input
                type="number"
                value={employmentBackground.emloyerNumber}
                onChange={(e) =>
                  setEmploymentBackground({
                    ...employmentBackground,
                    emloyerNumber: e.target.value,
                  })
                }
                placeholder="e.g. 1234567890"
              />
            </>
          ) : (
            false
          )}
        </FormControl>
        <FormControl>
          {employmentBackground.dependent === "dependent" ? (
            <>
              <FormLabel>Company Name</FormLabel>
              <Input
                type="text"
                value={employmentBackground.companyName}
                onChange={(e) =>
                  setEmploymentBackground({
                    ...employmentBackground,
                    companyName: e.target.value,
                  })
                }
                placeholder="e.g. ABC123"
              />
            </>
          ) : (
            false
          )}
        </FormControl>
        <FormControl>
          {employmentBackground.dependent === "dependent" ||
          employmentBackground.dependent === "independent" ? (
            <>
              <FormLabel>Economic Activity</FormLabel>
              <Input
                type="text"
                value={employmentBackground.economicActivity}
                onChange={(e) =>
                  setEmploymentBackground({
                    ...employmentBackground,
                    economicActivity: e.target.value,
                  })
                }
                placeholder="e.g. ABC123"
              />
            </>
          ) : null}
        </FormControl>
        <FormControl>
          {employmentBackground.dependent === "dependent" ||
          employmentBackground.dependent === "independent" ? (
            <>
              <FormLabel>Start of contract date</FormLabel>
              <Input
                type="date"
                value={employmentBackground.startOfContractDate}
                onChange={(e) =>
                  setEmploymentBackground({
                    ...employmentBackground,
                    startOfContractDate: e.target.value,
                  })
                }
                placeholder={new Date().toISOString().slice(0, 10)}
              />
            </>
          ) : null}
        </FormControl>
        <FormControl>
          {employmentBackground.dependent === "dependent" ? (
            <>
              <FormLabel>Position or job title</FormLabel>
              <Input
                type="text"
                value={employmentBackground.position}
                onChange={(e) =>
                  setEmploymentBackground({
                    ...employmentBackground,
                    position: e.target.value,
                  })
                }
                placeholder="e.g. ABC123"
              />
            </>
          ) : null}
        </FormControl>
        <FormControl>
          {employmentBackground.dependent === "dependent" ||
          employmentBackground.dependent === "independent" ? (
            <>
              <FormLabel>Monthly Income ($)</FormLabel>
              <Input
                type="number"
                value={employmentBackground.monthlyIncome}
                onChange={(e) =>
                  setEmploymentBackground({
                    ...employmentBackground,
                    monthlyIncome: e.target.value,
                  })
                }
                placeholder="e.g. 10000000"
              />
            </>
          ) : null}
        </FormControl>
        <Button colorScheme="blue" type="submit">
          Submit & Next
        </Button>
      </Stack>
    </form>
  );
};

export default EmploymentBg;

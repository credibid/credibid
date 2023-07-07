import { useState } from "react";
import {
  Stack,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  useToast,
} from "@chakra-ui/react";

const PartnerData = ({ handleNextStep, setParentObject }) => {
  const [partnerData, setPartnerData] = useState({
    clientRUT: "",
    clientName: "",
    fathersLastName: "",
    mothersLastName: "",
    dateOfBirth: "",
    university: "",
    profession: "",
    gender: "",
    nacionality: "",
    levelOfStudies: "",
  });

  const toast = useToast();

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      partnerData.clientRUT.trim() !== "" &&
      partnerData.clientName.trim() !== "" &&
      partnerData.fathersLastName.trim() !== "" &&
      partnerData.mothersLastName.trim() !== "" &&
      partnerData.dateOfBirth.trim() !== "" &&
      partnerData.university.trim() !== "" &&
      partnerData.profession.trim() !== "" &&
      partnerData.gender.trim() !== "" &&
      partnerData.nacionality.trim() !== "" &&
      partnerData.levelOfStudies.trim() !== ""
    ) {
      setParentObject((prevObject) => ({
        ...prevObject,
        partnerData,
      }));
      handleNextStep();
    } else {
      toast({
        title: "Error",
        description: "Please fill in all the required fields.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <Stack spacing={4}>
        <FormControl>
          <FormLabel>Client RUT</FormLabel>
          <Input
            type="text"
            value={partnerData.clientRUT}
            onChange={(e) =>
              setPartnerData({
                ...partnerData,
                clientRUT: e.target.value,
              })
            }
            placeholder="e.g. 12345678-9"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Client Name</FormLabel>
          <Input
            type="text"
            value={partnerData.clientName}
            onChange={(e) =>
              setPartnerData({
                ...partnerData,
                clientName: e.target.value,
              })
            }
            placeholder="e.g. John Doe"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Father's Last Name</FormLabel>
          <Input
            type="text"
            value={partnerData.fathersLastName}
            onChange={(e) =>
              setPartnerData({
                ...partnerData,
                fathersLastName: e.target.value,
              })
            }
            placeholder="e.g. Doe"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Mother's Last Name</FormLabel>
          <Input
            type="text"
            value={partnerData.mothersLastName}
            onChange={(e) =>
              setPartnerData({
                ...partnerData,
                mothersLastName: e.target.value,
              })
            }
            placeholder="e.g. Doe"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Date of Birth</FormLabel>
          <Input
            type="date"
            value={partnerData.dateOfBirth}
            onChange={(e) =>
              setPartnerData({
                ...partnerData,
                dateOfBirth: e.target.value,
              })
            }
            placeholder="e.g. 01/01/2000"
          />
        </FormControl>
        <FormControl>
          <FormLabel>University</FormLabel>
          <Input
            type="text"
            value={partnerData.university}
            onChange={(e) =>
              setPartnerData({
                ...partnerData,
                university: e.target.value,
              })
            }
            placeholder="e.g. University of XXX"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Profession</FormLabel>
          <Input
            type="text"
            value={partnerData.profession}
            onChange={(e) =>
              setPartnerData({
                ...partnerData,
                profession: e.target.value,
              })
            }
            placeholder="e.g. Engineer"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Gender</FormLabel>
          <Select
            value={partnerData.gender}
            onChange={(e) =>
              setPartnerData({
                ...partnerData,
                gender: e.target.value,
              })
            }
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="transgender">Transgender</option>
            <option value="gender neutral">Gender Neutral</option>
            <option value="non-binary">Non-Binary</option>
            <option value="agender">Agender</option>
            <option value="pangender">Pangender</option>
            <option value="genderqueer">Genderqueer</option>
            <option value="two-spirit">Two-Spirit</option>
            <option value="third gender">Third Gender</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Nacionality</FormLabel>
          <Input
            type="text"
            value={partnerData.nacionality}
            onChange={(e) =>
              setPartnerData({
                ...partnerData,
                nacionality: e.target.value,
              })
            }
            placeholder="e.g. Spanish"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Level of Studies</FormLabel>
          <Select
            value={partnerData.levelOfStudies}
            onChange={(e) =>
              setPartnerData({
                ...partnerData,
                levelOfStudies: e.target.value,
              })
            }
            placeholder="e.g. University"
          >
            <option value="">Select Level of Studies</option>
            <option value="primary">Primary</option>
            <option value="secondary">Secondary</option>
            <option value="tertiary">Tertiary</option>
            <option value="university">University</option>
            <option value="postgraduate">Postgraduate</option>
          </Select>
        </FormControl>
        <Button type="submit" colorScheme="blue">
          Submit & Next
        </Button>
      </Stack>
    </form>
  );
};

export default PartnerData;

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

const BankInfo = () => {
  const [bankReferences, setBankReferences] = useState({
    bankName: "",
    product: "",
    N: "",
  });

  const toast = useToast();

  const onSubmit = (e) => {
    e.preventDefault();

    if (
      bankReferences.bankName.trim() !== "" &&
      bankReferences.product.trim() !== "" &&
      bankReferences.N.trim() !== ""
    ) {
      console.log("Bank References: ", bankReferences);
      console.log(typeof bankReferences.N);
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
          <FormLabel>Bank</FormLabel>
          <Input
            type="text"
            value={bankReferences.bankName}
            onChange={(e) =>
              setBankReferences({
                ...bankReferences,
                bankName: e.target.value,
              })
            }
          />
        </FormControl>
        <FormControl>
          <FormLabel>Product</FormLabel>
          <Input
            type="text"
            value={bankReferences.product}
            onChange={(e) =>
              setBankReferences({
                ...bankReferences,
                product: e.target.value,
              })
            }
          />
        </FormControl>
        <FormControl>
          <FormLabel>
            N<sup>o</sup>
          </FormLabel>
          <Input
            type="number"
            value={bankReferences.N}
            onChange={(e) =>
              setBankReferences({
                ...bankReferences,
                N: e.target.value,
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

export default BankInfo;

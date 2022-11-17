import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  Button,
  Heading,
  HStack,
  Input,
  useToast,
  VStack,
} from "@chakra-ui/react";

export const MessageScreen = () => {
  const { id } = useParams();
  const toast = useToast();
  const [otp, setOtp] = useState(
    Math.floor(Math.random() * (999999 - 100000) + 100000)
  );
  const [loading,setLoading]= useState(false);

  const handleChange = (e) => {
    let inputOTP = e.target.value;
    setOtp(inputOTP);
  };

  const handleSend = () => {
    if (otp < 100000 || otp > 999999) {
      return toast({
        title: "OTP should be of 6 digits",
        status: "error",
        position: "top",
        isClosable: true,
      });
    }
    setLoading(true);
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/message`, {
        contact_id: id,
        text: `Hi, Your OTP is: ${otp}`,
        otp: otp,
      })
      .then((res) => {
        toast({
          title: "OTP sent successfully.",
          status: "success",
          position: "top",
          isClosable: true,
        });
      })
      .catch((e)=>alert("Error Occured"))
      .finally(()=> setLoading(false));
  };

  return (
    <VStack
      w={500}
      gap={5}
      m={"auto"}
      my={5}
      boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
      p={2}
    >
      <Heading>Message Screen</Heading>
      <HStack>
        <Input disabled value={`Hi, Your OTP is: `} />
        <Input
          disabled={loading}
          type="number"
          placeholder="Enter 6 digits otp"
          value={otp}
          onChange={handleChange}
        />
      </HStack>
      <Button disabled={loading} onClick={handleSend}>{loading ? "Sending Otp" : "Send"}</Button>
    </VStack>
  );
};

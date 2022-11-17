import { Button, Heading, Text, VStack } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const ContactInfo = () => {
  const { id } = useParams();
  const Navigate = useNavigate();
  const [details, setDetails] = useState({});

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/contacts/${id}`)
      .then((res) => setDetails(res.data));
  }, []);

  return (
    <VStack
      p={2}
      boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
      w={500}
      m={"auto"}
      my={5}
    >
      <Heading>Contact Details</Heading>
      <VStack fontWeight={500} fontSize={20} p={2} gap={2}>
        <Text>
          <b>Name -</b> {details.firstName} {details.lastName}
        </Text>
        <Text>
          <b>Phone -</b> {details.phone}
        </Text>
        <Button onClick={() => Navigate(`/messageScreen/${id}`)}>
          Send Message
        </Button>
      </VStack>
    </VStack>
  );
};

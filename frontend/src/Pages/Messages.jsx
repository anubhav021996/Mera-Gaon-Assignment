import { Heading, Skeleton, Stack, VStack } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { MessageCard } from "../Components/MessageCard";

export const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading]= useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/message`)
      .then((res) => setMessages(res.data))
      .catch((e)=>alert("Error Occured"))
      .finally(()=> setLoading(false));
  }, []);

  return (
    <VStack
      w={500}
      m={"auto"}
      p={2}
      gap={2}
      my={5}
      boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
    >
      <Heading>Messages</Heading>
      <Stack w={"90%"} gap={2}>
        {messages.map((e) => (
          <Skeleton isLoaded={!loading}>
          <MessageCard
            key={e._id}
            firstName={e.contact_id.firstName}
            lastName={e.contact_id.lastName}
            time={e.createdAt}
            otp={e.otp}
          />
          </Skeleton>
        ))}
      </Stack>
    </VStack>
  );
};

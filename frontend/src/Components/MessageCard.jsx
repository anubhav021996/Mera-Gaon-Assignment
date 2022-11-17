import { Text, VStack } from "@chakra-ui/react";

export const MessageCard = ({ firstName, lastName, time, otp }) => {
  const date = time.split("T")[0];
  const hours = time.split("T")[1].slice(0, 8);
  return (
    <VStack
      p={2}
      boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
    >
      <Text>
        <b>Name: </b>
        {firstName} {lastName}
      </Text>
      <Text>
        <b>Otp Sent: </b>
        {otp}
      </Text>
      <Text>
        <b>Time: </b>
        {hours}
      </Text>
      <Text>
        <b>Date: </b>
        {date}
      </Text>
    </VStack>
  );
};

import { Box, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const ContactsCard = ({ id, firstName, lastName }) => {
  const Navigate = useNavigate();
  return (
    <Box
      cursor="pointer"
      w={"90%"}
      onClick={() => Navigate(`/contactInfo/${id}`)}
    >
      <Text
        boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
        p={2}
      >
        {firstName} {lastName}
      </Text>
    </Box>
  );
};

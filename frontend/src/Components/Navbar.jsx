import { HStack, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const MenuStyle = {
  cursor: "pointer",
  fontWeight: "500",
  _hover: {
    color: "rgb(25,118,210)",
    borderBottom: "1px solid rgb(25,118,210)",
  },
};

export const Navbar = () => {
  const Navigate = useNavigate();
  return (
    <HStack
      p={2}
      pr={10}
      justifyContent="space-between"
      boxShadow="rgba(17, 17, 26, 0.1) 0px 1px 0px"
    >
      <Image
        src="https://meragaonapp.com/static/media/MGlogoo.145821c7.png"
        w={150}
        alt="logo"
      />
      <HStack gap={5}>
        <Text {...MenuStyle} onClick={() => Navigate("/")}>
          Contacts
        </Text>
        <Text {...MenuStyle} onClick={() => Navigate("/messages")}>
          Messages
        </Text>
      </HStack>
    </HStack>
  );
};

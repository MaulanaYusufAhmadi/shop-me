import { Container, Flex, Text, Input, HStack, Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { LuSearch } from "react-icons/lu";
import { InputGroup } from "./ui/input-group";
import { LuShoppingCart } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";

const NavBar = () => {
  return (
    <Container minW={"100%"} mb={8} px={12} py={4} bg={"gray.400"}>
      <Flex
        h={8}
        gap={20}
        alignItems={"center"}
        justifyContent={"center"}
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
        <Text fontSize={"2xl"} fontWeight={"extrabold"}>
          <Link to={"/"}>SHOP.ME</Link>
        </Text>

        <Flex
          alignItems={"center"}
          gap={4}
          flexDir={{ base: "column", sm: "row" }}
        >
          <Text fontSize={"sm"}>Shop</Text>
          <Text fontSize={"sm"}>On Sale</Text>
          <Text fontSize={"sm"}>New Arrival</Text>
          <Text fontSize={"sm"}>Brand</Text>
        </Flex>
        <InputGroup startElement={<LuSearch color="black" />}>
          <Input placeholder="Search" rounded={"full"} w={{ xl: "500px", sm: "auto" }}/>
        </InputGroup>
        <HStack spacing={16} alignItems={"center"}>
          <Link to={"/create"}>
            <Icon size={"md"}>
              <LuShoppingCart />
            </Icon>
          </Link>
          <Link to={"/create"}>
            <Icon size={"md"}>
              <CgProfile />
            </Icon>
          </Link>
        </HStack>
      </Flex>
    </Container>
  );
};

export default NavBar;

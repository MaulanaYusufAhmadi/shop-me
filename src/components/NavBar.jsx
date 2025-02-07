import {
  Container,
  Flex,
  Text,
  Input,
  HStack,
  Icon,
  IconButton,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { LuSearch } from "react-icons/lu";
import { InputGroup } from "./ui/input-group";
import { LuShoppingCart } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  DrawerActionTrigger,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";

const NavBar = () => {
  return (
    <Container minW={"100%"} px={12} py={6} bg={"white"}>
      <Flex h={8} gap={20} alignItems={"center"} justifyContent={"center"}>
        <DrawerRoot>
          <DrawerBackdrop />
          <DrawerTrigger asChild display={{ base: "block", sm: "none" }}>
            <Icon size={"md"}>
              <GiHamburgerMenu />
            </Icon>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle />
            </DrawerHeader>
            <DrawerBody spaceY={4}>
              <Text fontSize={"sm"}>Shop</Text>
              <Text fontSize={"sm"}>On Sale</Text>
              <Text fontSize={"sm"}>New Arrival</Text>
              <Text fontSize={"sm"}>Brand</Text>
            </DrawerBody>
            <DrawerCloseTrigger />
          </DrawerContent>
        </DrawerRoot>
        <Text fontSize={"2xl"} fontWeight={"extrabold"}>
          <Link to={"/"}>SHOP.ME</Link>
        </Text>

        <Flex
          alignItems={"center"}
          gap={4}
          flexDir={{ base: "column", sm: "row" }}
          display={{ base: "none", sm: "flex" }}

        >
          <Text fontSize={"sm"}>Shop</Text>
          <Text fontSize={"sm"}>On Sale</Text>
          <Text fontSize={"sm"}>New Arrival</Text>
          <Text fontSize={"sm"}>Brand</Text>
        </Flex>
        <InputGroup
          startElement={<LuSearch color="black" />}
          display={{ base: "none", md: "flex" }}
        >
          <Input
            placeholder="Search"
            rounded={"full"}
            w={{ xl: "500px", sm: "auto" }}
          />
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

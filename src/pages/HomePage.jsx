import {
  Container,
  Image,
  Box,
  Flex,
  Stack,
  HStack,
  Text,
  Button,
  Separator,
  SimpleGrid,
  GridItem,
} from "@chakra-ui/react";
import ProductCard from "../components/ProductCard";
import Testimonials from "../components/Testimonials";

const HomePage = () => {
  return (
    <Container
      overflow={"hidden"}
      minH={"lvh"}
      display={"flex"}
      flexDir={"column"}
      p={0}
      bg={"white"}
    >
      {/* Hero Section */}
      <Box h={"86vh"} bg={"brand.100"}>
        <Flex
          flexDir={{
            base: "column",
            sm: "row",
          }}
          justifyContent={"space-between"}
        >
          <Stack
            p={{
              base: 6,
              sm: 16,
            }}
            spaceY={16}
          >
            <Stack
              justifyContent={{
                base: "start",
                sm: "center",
              }}
              spaceY={4}
            >
              <Text
                fontSize={{
                  base: "3xl",
                  sm: "5xl",
                }}
                fontWeight={"extrabold"}
                flexWrap={"wrap"}
                minW={"30vh"}
              >
                FIND CLOTES THAT MATCH YOUR STYLE
              </Text>
              <Text
                fontSize={{
                  base: "sm",
                  sm: "md",
                }}
                fontWeight={"light"}
                flexWrap={"wrap"}
                minW={"30vh"}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                consequatur ut qui numquam nostrum quasi dicta nemo autem facere
                architecto!
              </Text>
              <Button w={"20vh"} rounded={"full"} size={"xl"}>
                Shop Now
              </Button>
            </Stack>
            <Flex flexWrap={"nowrap"} gapX={8}>
              <Box>
                <Text
                  fontSize={{
                    base: "2xl",
                    sm: "3xl",
                  }}
                  fontWeight={"bold"}
                >
                  200+
                </Text>
                <Text
                  fontSize={{
                    base: "xs",
                    sm: "sm",
                  }}
                  fontWeight={"light"}
                >
                  International Brands
                </Text>
              </Box>
              <Box>
                <Text
                  fontSize={{
                    base: "2xl",
                    sm: "3xl",
                  }}
                  fontWeight={"bold"}
                >
                  2,000+
                </Text>
                <Text
                  fontSize={{
                    base: "xs",
                    sm: "sm",
                  }}
                  fontWeight={"light"}
                >
                  High-Quality Product
                </Text>
              </Box>
              <Box>
                <Text
                  fontSize={{
                    base: "2xl",
                    sm: "3xl",
                  }}
                  fontWeight={"bold"}
                >
                  30,000+
                </Text>
                <Text
                  fontSize={{
                    base: "xs",
                    sm: "sm",
                  }}
                  fontWeight={"light"}
                >
                  Happy Customers
                </Text>
              </Box>
            </Flex>
          </Stack>
          <Image
            w={{
              sm: "sm",
              md: "xl",
              xl: "full",
            }}
            h={"full"}
            justifySelf={"end"}
            src="/pict.png"
            fit={"contain"}
            alt="Hero Picture"
          />
        </Flex>
      </Box>

      {/* Brand Section */}
      <Box
        h={{ base: "18vh", lg: "12vh" }}
        bg={"black"}
        alignContent={"center"}
      >
        <Flex justifyContent={"space-around"} wrap={"wrap"} spaceY={2}>
          <Image
            fit={"contain"}
            w={"15vh"}
            src="/versace.png"
            alt="calvin klein"
          />
          <Image
            fit={"contain"}
            w={"10vh"}
            src="/zara.png"
            alt="calvin klein"
          />
          <Image
            fit={"contain"}
            w={"15vh"}
            src="/gucci.png"
            alt="calvin klein"
          />
          <Image
            fit={"contain"}
            w={"15vh"}
            src="/prada.png"
            alt="calvin klein"
          />
          <Image
            fit={"contain"}
            w={"15vh"}
            src="/calvin.png"
            alt="calvin klein"
          />
        </Flex>
      </Box>

      {/* New Arrival Section */}
      <Box h={"86vh"} bg={"white"} pt={"12"}>
        <Flex flexDir={"column"} justifyContent={"center"}>
          <Text
            fontSize={{
              base: "xl",
              sm: "4xl",
            }}
            my={"8"}
            textAlign={"center"}
            fontWeight={"extrabold"}
            flexWrap={"wrap"}
            minW={"30vh"}
          >
            NEW ARRIVAL
          </Text>
          <Box mx={"auto"} w={"80%"}>
            <HStack
              justifyContent={"space-between"}
              overflowX={"auto"}
              gapX={4}
            >
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </HStack>
          </Box>
          <Button
            mx={"auto"}
            borderWidth={"1"}
            borderColor={"gray.200"}
            color={"black"}
            my={8}
            bg={"white"}
            w={"20vh"}
            rounded={"full"}
            size={"lg"}
          >
            View all
          </Button>
          <Box mx={"auto"} w={"80%"}>
            <Separator size={"md"} />
          </Box>
        </Flex>
      </Box>

      {/* Top Selling Section */}
      <Box h={"86vh"} bg={"white"} pt={"12"}>
        <Flex flexDir={"column"} justifyContent={"center"}>
          <Text
            fontSize={{
              base: "xl",
              sm: "4xl",
            }}
            my={"8"}
            textAlign={"center"}
            fontWeight={"extrabold"}
            flexWrap={"wrap"}
            minW={"30vh"}
          >
            TOP SELLING
          </Text>
          <Box mx={"auto"} w={"80%"}>
            <HStack
              justifyContent={"space-between"}
              overflowX={"auto"}
              gapX={4}
            >
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </HStack>
          </Box>
          <Button
            mx={"auto"}
            borderWidth={"1"}
            borderColor={"gray.200"}
            color={"black"}
            my={8}
            bg={"white"}
            w={"20vh"}
            rounded={"full"}
            size={"lg"}
          >
            View all
          </Button>
        </Flex>
      </Box>

      {/* Browse by Dress Style Section */}
      <Box
        rounded={"3xl"}
        mx={"auto"}
        my={"12"}
        w={"80%"}
        h={"content"}
        bg={"brand.100"}
      >
        <Flex
          p={{ base: 4, sm: 8 }}
          flexDir={"column"}
          justifyContent={"center"}
        >
          <Text
            fontSize={{
              base: "xl",
              sm: "4xl",
            }}
            textAlign={"center"}
            fontWeight={"extrabold"}
            flexWrap={"wrap"}
            minW={"30vh"}
          >
            BROWSE BY STYLE DRESS
          </Text>
          <SimpleGrid
            p={{ base: 6, sm: 12 }}
            columns={{ base: 1, md: 3 }}
            gap={{ base: "16px", md: "24px" }}
          >
            <GridItem colSpan={{ base: 1, md: 2 }}>
              <Box
                position={"relative"}
                overflow={"hidden"}
                rounded="xl"
                h={{ base: "15vh", sm: "30vh" }}
              >
                <Text
                  fontSize={{
                    base: "xl",
                    sm: "3xl",
                  }}
                  fontWeight={"bold"}
                  zIndex={1}
                  position={"absolute"}
                  top={"6"}
                  left={"6"}
                >
                  Casual
                </Text>
                <Image
                  _hover={{ scale: 1.2, transition: "0.3s ease-in-out" }}
                  transition={"0.3s ease-in-out"}
                  w={"full"}
                  src="https://bit.ly/dan-abramov"
                  alt="Dan Abramov"
                  fit={"contain"}
                />
              </Box>
            </GridItem>
            <GridItem colSpan={{ base: 1, md: 1 }}>
              <Box
                position={"relative"}
                overflow={"hidden"}
                rounded="xl"
                h={{ base: "15vh", sm: "30vh" }}
              >
                <Text
                  fontSize={{
                    base: "xl",
                    sm: "3xl",
                  }}
                  fontWeight={"bold"}
                  zIndex={1}
                  position={"absolute"}
                  top={"6"}
                  left={"6"}
                >
                  Formal
                </Text>
                <Image
                  _hover={{ scale: 1.2, transition: "0.3s ease-in-out" }}
                  transition={"0.3s ease-in-out"}
                  w={"full"}
                  src="https://bit.ly/dan-abramov"
                  alt="Dan Abramov"
                  fit={"contain"}
                />
              </Box>
            </GridItem>
            <GridItem colSpan={{ base: 1, md: 1 }}>
              <Box
                position={"relative"}
                overflow={"hidden"}
                rounded="xl"
                h={{ base: "15vh", sm: "30vh" }}
              >
                <Text
                  fontSize={{
                    base: "xl",
                    sm: "3xl",
                  }}
                  fontWeight={"bold"}
                  zIndex={1}
                  position={"absolute"}
                  top={"6"}
                  left={"6"}
                >
                  Party
                </Text>
                <Image
                  _hover={{ scale: 1.2, transition: "0.3s ease-in-out" }}
                  transition={"0.3s ease-in-out"}
                  w={"full"}
                  src="https://bit.ly/dan-abramov"
                  alt="Dan Abramov"
                  fit={"contain"}
                />
              </Box>
            </GridItem>
            <GridItem colSpan={{ base: 1, md: 2 }}>
              <Box
                position={"relative"}
                overflow={"hidden"}
                rounded="xl"
                h={{ base: "15vh", sm: "30vh" }}
              >
                <Text
                  fontSize={{
                    base: "xl",
                    sm: "3xl",
                  }}
                  fontWeight={"bold"}
                  zIndex={1}
                  position={"absolute"}
                  top={"6"}
                  left={"6"}
                >
                  Gym
                </Text>
                <Image
                  _hover={{ scale: 1.2, transition: "0.3s ease-in-out" }}
                  transition={"0.3s ease-in-out"}
                  w={"full"}
                  src="https://bit.ly/dan-abramov"
                  alt="Dan Abramov"
                  fit={"contain"}
                />
              </Box>
            </GridItem>
          </SimpleGrid>
        </Flex>
      </Box>

      {/* Testimonial Section */}
      <Box h={"50vh"}>
        <Flex flexDir={"column"} justifyContent={"center"} px={16} py={8}>
          <Text
            fontSize={{
              base: "xl",
              sm: "4xl",
            }}
            fontWeight={"extrabold"}
            flexWrap={"wrap"}
            minW={"30vh"}
          >
            OUR HAPPY CUSTOMERS
          </Text>
         <Testimonials></Testimonials>
        </Flex>
      </Box>

      {/* Footer Section */}
      
    </Container>
  );
};

export default HomePage;

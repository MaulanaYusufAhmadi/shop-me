import {
  Container,
  Image,
  Box,
  Flex,
  Stack,
  Text,
  Button,
} from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Container minH={"lvh"} display={"flex"} flexDir={"column"} p={0} bg={"white"}>

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
                sm: "center"
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
              base: "sm",
              xl: "full",
            }}
            h={"full"}
            display={"block"}
            justifySelf={"end"}
            src="/pict.png"
            fit={"cover"}
            alt="Hero Picture"
          />
        </Flex>
      </Box>

      {/* Brand Section */}
      <Box h={"12vh"} bg={"black"}>
        
      </Box>

    </Container>
  );
};

export default HomePage;

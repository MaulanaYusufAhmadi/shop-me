import { Container, Image, Grid } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Container minH={"80vh"} bg={"brand.100"}>
      <Grid templateColumns="repeat(2, 1fr)" gap="6">
        <Image src="../public/pict.png" fit={"cover"} alt="Hero Picture" />
      </Grid>
    </Container>
  );
};

export default HomePage;

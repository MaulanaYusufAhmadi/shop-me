import { Card, Image, Text, HStack } from "@chakra-ui/react";
import { Rating } from "./ui/rating";

const ProductCard = () => {
  return (
    <Card.Root flexShrink={0} border={"none"} w={"2xs"} overflow="hidden">
      <Image
        rounded={"lg"}
        objectFit={"cover"}
        w={64}
        h={64}
        src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt="Green double couch with wooden legs"
      />
      <Card.Body m={-4} gap="2">
        <Card.Title>Living room Sofa</Card.Title>
        <HStack>
          <Rating colorPalette="orange" readOnly size="xs" defaultValue={3} />
          <Text>3/5</Text>
        </HStack>
        <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
          $450
        </Text>
      </Card.Body>
    </Card.Root>
  );
};

export default ProductCard;

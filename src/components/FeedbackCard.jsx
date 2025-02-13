import { Box, Text } from "@chakra-ui/react";
import { Rating } from "./ui/rating";

const FeedbackCard = ({ star, customer, content }) => {
  return (
    <Box
      w={{
        base: "xs",
        sm: "sm",}}
      h={"30vh"}
      border={"solid 1px"}
      rounded={"xl"}
      borderColor={"gray.200"}
      p={6}
      overflow={"hidden"}
      spaceY={2}
      display={"flex"}
      flexDir={"column"}
    >
      <Rating defaultValue={star} colorPalette="orange" size="xs"></Rating>
      <Text fontSize={"xl"} fontWeight={"semibold"}>{customer}</Text>
      <Text>
        "{content}"
      </Text>
    </Box>
  );
};

export default FeedbackCard;

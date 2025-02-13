import { Box } from "@chakra-ui/react";
import FeedbackCard from "./FeedbackCard";
import { Carousel } from "nuka-carousel";

const feedback = [
  {
    star: 5,
    customer: "John Doe",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nesciunt earum sequi modi tempore reiciendis dolore numquam at mollitia exercitationem?",
  },
  {
    star: 4,
    customer: "Akjaksjkh sjdjk",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nesciunt earum sequi modi tempore reiciendis dolore numquam at mollitia exercitationem?",
  },
  {
    star: 5,
    customer: "Wejh Akjoi",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nesciunt earum sequi modi tempore reiciendis dolore numquam at mollitia exercitationem?",
  },
  {
    star: 1,
    customer: "Pooj KJJh",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nesciunt earum sequi modi tempore reiciendis dolore numquam at mollitia exercitationem?",
  },
  {
    star: 3,
    customer: "Lkoi JOI",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nesciunt earum sequi modi tempore reiciendis dolore numquam at mollitia exercitationem?",
  },
];

const Testimonials = () => {
  return (
    <Box minW={"100%"} py={6}>
      <Carousel showArrows autoplay={true} autoplayInterval={1000}>
        {feedback.map((f) => (
          <Box
            mx={{
              base: 1,
              sm: 2,
            }}
            spaceX={4}
            key={f.customer}
          >
            <FeedbackCard
              star={f.star}
              customer={f.customer}
              content={f.content}
            />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default Testimonials;

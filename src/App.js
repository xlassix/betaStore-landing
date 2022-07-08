import { Box, Flex, Text, Center } from "@chakra-ui/react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./App.css";

const countryData = [
  {
    image: "/img/nigeria.png",
    imageAlt: "nigeria.png",
    countryName: "NIGERIA",
    to: "https://google.com",
  },
  {
    image: "/img/cote.png",
    imageAlt: "cote.png",
    countryName: "CÔTE D'IVOIRE",
    to: "https://google.com",
  },
  {
    image: "/img/sn.png",
    imageAlt: "sen.png",
    countryName: "SENEGAL",
    to: "https://google.com",
  },
];

function App() {
  return (
    <Flex
      className="App"
      bgColor="rgb(9, 23, 71)"
      minWidth="100vw"
      minHeight="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        bgColor="white"
        margin="auto"
        padding="1rem"
        borderRadius="1.5rem"
        color="rgb(2, 150, 166)"
      >
        <img src="/img/logo.gif" alt="logo" className="logo" />
        <Text textAlign="center" as="h6">
          SELECT A COUNTRY
        </Text>
        <Box>
          <CarouselProvider
            naturalSlideWidth={20}
            naturalSlideHeight={25}
            visibleSlides={1}
            totalSlides={countryData.length}
          >
            <ButtonBack className="animate">
              <MdNavigateBefore />
            </ButtonBack>
            <Slider>
              {countryData.map((data, index) => (
                <a href={data.to}>
                  <Slide index={index}>
                    <Center>
                      <img src={data.image} alt={data.imageAlt} />
                    </Center>
                    <Text>{data.countryName}</Text>
                  </Slide>
                </a>
              ))}
            </Slider>
            <ButtonNext className="animate">
              <MdNavigateNext />
            </ButtonNext>
          </CarouselProvider>
        </Box>
        <Text textAlign="left">New Client? Click Here</Text>
        <Text textAlign="left">New Wholesaler? Click Here</Text>
      </Box>
    </Flex>
  );
}

export default App;

import { Box, Flex, Text, Center } from "@chakra-ui/react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import{BsWhatsapp,BsFillTelephoneFill} from "react-icons/bs";
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
    chooseACountry: "SELECT A COUNTRY",
    image: "/img/nigeria.png",
    imageAlt: "nigeria.png",
    countryName: "NIGERIA",
    to: "https://google.com",
    clickHere:"Click here?",
    clientClick:"https://docs.google.com/forms/d/e/1FAIpQLScR-G20XyEbWCQY_-7wZHspH9mdAcKeHNPSjpv-W6ueuToSHw/viewform",
    warehouseClick:"https://forms.gle/FxrxES2eWicbPoWv7",
    chatUs:"Chat en ligne",
    enquireOrComplain:"Enquire/Complaint",
    contact:"08155546404",
    whatsapp:"https://wa.me/2348155546404?text=Hi.+Help_me+Please",
    newClient:"New Client? ",
    newWholeSaler:"New WholeSaler? ",
  },
  {
    chooseACountry: "CHOISISSEZ UN PAYS",
    image: "/img/cote.png",
    imageAlt: "cote.png",
    countryName: "CÔTE D'IVOIRE",
    to: "https://google.com",
    clickHere:"Cliquez ici",
    clientClick:"https://docs.google.com/forms/d/e/1FAIpQLScR-G20XyEbWCQY_-7wZHspH9mdAcKeHNPSjpv-W6ueuToSHw/viewform",
    warehouseClick:"https://forms.gle/FxrxES2eWicbPoWv7",
    chatUs:"Chat en ligne:",
    enquireOrComplain:"Question/Plainte",
    contact:"+221 78 541 32 32",
    whatsapp:"https://api.whatsapp.com/send/?phone=221785413232&text&type=phone_number&app_absent=0",
    newClient:"Nouveau Client? ",
    newWholeSaler:"Nouveau Client? ",
  },
  {
    chooseACountry: "CHOISISSEZ UN PAYS",
    image: "/img/sn.png",
    imageAlt: "sen.png",
    countryName: "SENEGAL",
    to: "https://google.com",
    clickHere:"Cliquez ici",
    clientClick:"https://docs.google.com/forms/d/e/1FAIpQLScR-G20XyEbWCQY_-7wZHspH9mdAcKeHNPSjpv-W6ueuToSHw/viewform",
    warehouseClick:"https://forms.gle/FxrxES2eWicbPoWv7",
    chatUs:"Chat en ligne:",
    enquireOrComplain:"Question/Plainte",
    contact:"+225 07 89 77 49 65",
    newClient:"Nouveau Client? ",
    newWholeSaler:"Nouveau Client? ",
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
        <Box>
          <CarouselProvider
            naturalSlideWidth={20}
            naturalSlideHeight={25}
            visibleSlides={1}
            totalSlides={countryData.length}
          >
            <Box>
              <ButtonBack className="animate">
                <MdNavigateBefore />
              </ButtonBack>
              <Slider>
                {countryData.map((data, index) => (
                  <Box key={data.countryName}>
                    <Slide index={index}>
                    <Text textAlign="center" as="h6">
                      {data.chooseACountry}
                    </Text>
                      <a href={data.to}>
                        <Box
                        margin="0.5rem 0"
                          sx={{
                            "&:hover": {
                              color: "orange",
                            },
                          }}
                        >
                          <Center>
                            <img src={data.image} alt={data.imageAlt} />
                          </Center>
                          <Text as={"h5"}>{data.countryName}</Text>
                        </Box>
                      </a>
                      <Text textAlign="left">{data.newClient}{"  "}<a href={data.clientClick}>{data.clickHere}</a></Text>
                      <Text textAlign="left">{data.newWholeSaler}{"  "}<a href={data.warehouseClick}>{data.clickHere}</a></Text>
                      <Text textAlign="left">{data.enquireOrComplain}: <a href={`tel(${data.contact})`}><BsFillTelephoneFill/> {data.contact}</a></Text>
                      <Text textAlign="left">{data.chatUs}:<a className="green" href={data.whatsapp}><BsWhatsapp/></a> </Text>
                    </Slide>
                  </Box>
                ))}
              </Slider>
              <ButtonNext className="animate">
                <MdNavigateNext />
              </ButtonNext>
            </Box>
          </CarouselProvider>
        </Box>
      </Box>
    </Flex>
  );
}

export default App;

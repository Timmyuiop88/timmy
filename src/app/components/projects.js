'use client'

import {
  Box,
  Stack,
  Text,
  Heading,
  Center,
  Hide,
  Show,
  SimpleGrid,
  Link,
  IconButton,
  Image
} from "@chakra-ui/react";
import { BsArrowUpRight } from "react-icons/bs";
export default function Projects() {
  return (
    <>
      <Box pt={"50px"} px={"10%"} w={"full"}>
        <SimpleGrid
          m={"auto"}
          justifyContent={"center"}
          maxW={"7xl"}
          minChildWidth="350px"
          spacing="10px"
        >
          <Box
            m={"auto"}
            bg="#ffffff"  
             borderRadius={"16px"}
            boxShadow={"0px 0px 26px 1px rgba(0, 0, 0, 0.03)"}
            border={"0.5px solid rgba(153, 162, 175, 0.60)"}
            maxW={["full", "full", "350px", "350px"]}
            minW={["full", "full", "350px", "350px"]}
            height="auto"
         
          >
            <Stack
              direction={"row"}
              w={"full"}
              display={"flex"}
              justifyContent={"center"}
              pt={"20px"}
            >
              <Text
                fontSize={"24px"}
                fontWeight={"500"}
                color={"#99A2AF"}
                px={"10px"}
                w={"auto"}
                h={"auto"}
                bg={"#ECEFF2"}
                borderRadius={"35px"}
              >
               next
              </Text>
              <Text
                fontSize={"24px"}
                fontWeight={"500"}
                color={"#99A2AF"}
                px={"10px"}
                w={"auto"}
                h={"auto"}
                bg={"#ECEFF2"}
                borderRadius={"35px"}
              >
                REACT JS
              </Text>
              <Text
                fontSize={"24px"}
                fontWeight={"500"}
                color={"#99A2AF"}
                px={"10px"}
                w={"auto"}
                h={"auto"}
                bg={"#ECEFF2"}
                borderRadius={"35px"}
              >
                Chakra ui
              </Text>
            </Stack>

            <Box w={"330px"} h={"340px"} m={"auto"} pt={"20px"} pb={0}>
           <Image m={'auto'} src={"/p1.png"} width="430" height={'300'} alt="Picture of the author"
  />
            </Box>
            <Box mt={"0"} w={"full"} h={"auto"} px={"10px"}>
              <Text
                alignItems={"center"}
                display={"flex"}
                fontSize={["70px"]}
                fontWeight={"700"}
                color={"#DFDFDF"}
              >
                01
                <Text color={"#06D6A0"}>.</Text>
                <Text
                  ml={"20px"}
                  w={"189px"}
                     fontSize={["25px"]}
                  fontWeight={"400"}
                  lineHeight={"25px"}
                  color={"#121212"}
                  letterSpacing={"2px"}
                >
                Givaa v1
                </Text>
                <Link href="https://eloquent-raindrop-2399c2.netlify.app/">
                  <IconButton
                    height={"60px"}
                    w={"60px"}
                    border={"0.5px solid rgba(153, 162, 175, 0.60)"}
                    isRound={true}
                    color={"black"}
                    variant="solid"
                    colorScheme="none"
                    aria-label="Done"
                     fontSize="30px"
                    icon={<BsArrowUpRight />}
                  />
                </Link>
              </Text>
            </Box>
          </Box>
          <Box
            m={"auto"}
            bg="#ffffff"
            boxShadow={"0px 0px 26px 1px rgba(0, 0, 0, 0.03)"}
            border={"0.5px solid rgba(153, 162, 175, 0.60)"}
            maxW={["full", "full", "350px", "350px"]}
            minW={["full", "full", "350px", "350px"]}
            height="auto"
            borderRadius={"16px"}
          >
            <Stack
              direction={"row"}
              w={"full"}
              display={"flex"}
              justifyContent={"center"}
              pt={"20px"}
            >
             
              <Text
                fontSize={"24px"}
                fontWeight={"500"}
                color={"#99A2AF"}
                px={"10px"}
                w={"auto"}
                h={"auto"}
                bg={"#ECEFF2"}
                borderRadius={"35px"}
              >
                REACT JS
              </Text>
              <Text
                fontSize={"24px"}
                fontWeight={"500"}
                color={"#99A2AF"}
                px={"10px"}
                w={"auto"}
                h={"auto"}
                bg={"#ECEFF2"}
                borderRadius={"35px"}
              >
                Next
              </Text>
              <Text
                fontSize={"24px"}
                fontWeight={"500"}
                color={"#99A2AF"}
                px={"10px"}
                w={"auto"}
                h={"auto"}
                bg={"#ECEFF2"}
                borderRadius={"35px"}
              >
                Chakra ui
              </Text>

            </Stack>

            <Box w={"330px"} h={"340px"} m={"auto"} pt={"20px"} pb={0}>
           <Image m={'auto'} src={"/p2.png"} width="430" height={'300'} alt="Picture of the author"
  />
            </Box>
            <Box mt={"0"} w={"full"} h={"auto"} px={"10px"}>
              <Text
                alignItems={"center"}
                display={"flex"}
                fontSize={["70px"]}
                fontWeight={"700"}
                color={"#DFDFDF"}
              >
                02
                <Text color={"#06D6A0"}>.</Text>
                <Text
                  ml={"20px"}
                  w={"189px"}
                     fontSize={["25px"]}
                  fontWeight={"400"}
                  lineHeight={"25px"}
                  color={"#121212"}
                  letterSpacing={"2px"}
                >
            Givaa v2
                </Text>
                <Link href="https://giv-one.vercel.app/">
                  <IconButton
                    height={"60px"}
                    w={"60px"}
                    border={"0.5px solid rgba(153, 162, 175, 0.60)"}
                    isRound={true}
                    color={"black"}
                    variant="solid"
                    colorScheme="none"
                    aria-label="Done"
                     fontSize="30px"
                    icon={<BsArrowUpRight />}
                  />
                </Link>
              </Text>
            </Box>
          </Box>
          <Box
            m={"auto"}
            bg="#ffffff"
            boxShadow={"0px 0px 26px 1px rgba(0, 0, 0, 0.03)"}
            border={"0.5px solid rgba(153, 162, 175, 0.60)"}
            maxW={["full", "full", "350px", "350px"]}
            minW={["full", "full", "350px", "350px"]}
            height="auto"
            borderRadius={"16px"}
          >
            <Stack
              direction={"row"}
              w={"full"}
              display={"flex"}
              justifyContent={"center"}
              pt={"20px"}
            >
              <Text
                fontSize={"24px"}
                fontWeight={"500"}
                color={"#99A2AF"}
                px={"10px"}
                w={"auto"}
                h={"auto"}
                bg={"#ECEFF2"}
                borderRadius={"35px"}
              >
                REACT JS
              </Text>
              <Text
                fontSize={"24px"}
                fontWeight={"500"}
                color={"#99A2AF"}
                px={"10px"}
                w={"auto"}
                h={"auto"}
                bg={"#ECEFF2"}
                borderRadius={"35px"}
              >
             Firebase
              </Text>
              <Text
                fontSize={"24px"}
                fontWeight={"500"}
                color={"#99A2AF"}
                px={"10px"}
                w={"auto"}
                h={"auto"}
                bg={"#ECEFF2"}
                borderRadius={"35px"}
              >
                CSS
              </Text>
            </Stack>

            <Box w={"330px"} h={"340px"} m={"auto"} pt={"20px"} pb={0} >
              <Image m={'auto'} src={"/p3.png"} width="430" height={'300'} alt="Picture of the author"
  />
            </Box>
            <Box mt={"0"} w={"full"} h={"auto"} px={"10px"}>
              <Text
                alignItems={"center"}
                display={"flex"}
                fontSize={["70px"]}
                fontWeight={"700"}
                color={"#DFDFDF"}
              >
                03
                <Text color={"#06D6A0"}>.</Text>
                <Text
                  ml={"20px"}
                  w={"189px"}
                     fontSize={["25px"]}
                  fontWeight={"400"}
                  lineHeight={"25px"}
                  color={"#121212"}
                  letterSpacing={"2px"}
                >
                 Image Gallery
                </Text>
                <Link href="https://google.com">
                  <IconButton
                    height={"60px"}
                    w={"60px"}
                    border={"0.5px solid rgba(153, 162, 175, 0.60)"}
                    isRound={true}
                    color={"black"}
                    variant="solid"
                    colorScheme="none"
                    aria-label="Done"
                     fontSize="30px"
                    icon={<BsArrowUpRight />}
                  />
                </Link>
              </Text>
            </Box>
          </Box>
          <Box
            m={"auto"}
            bg="#ffffff"
            boxShadow={"0px 0px 26px 1px rgba(0, 0, 0, 0.03)"}
            border={"0.5px solid rgba(153, 162, 175, 0.60)"}
            maxW={["full", "full", "350px", "350px"]}
            minW={["full", "full", "350px", "350px"]}
            height="auto"
            borderRadius={"16px"}
          >
            <Stack
              direction={"row"}
              w={"full"}
              display={"flex"}
              justifyContent={"center"}
              pt={"20px"}
            >
              <Text
                fontSize={"24px"}
                fontWeight={"500"}
                color={"#99A2AF"}
                px={"10px"}
                w={"auto"}
                h={"auto"}
                bg={"#ECEFF2"}
                borderRadius={"35px"}
              >
                REDUX
              </Text>
              <Text
                fontSize={"24px"}
                fontWeight={"500"}
                color={"#99A2AF"}
                px={"10px"}
                w={"auto"}
                h={"auto"}
                bg={"#ECEFF2"}
                borderRadius={"35px"}
              >
                REACT JS
              </Text>
              <Text
                fontSize={"24px"}
                fontWeight={"500"}
                color={"#99A2AF"}
                px={"10px"}
                w={"auto"}
                h={"auto"}
                bg={"#ECEFF2"}
                borderRadius={"35px"}
              >
                CSS
              </Text>
            </Stack>

            <Box w={"330px"} h={"340px"} m={"auto"} pt={"20px"} pb={0}>
           <Image m={'auto'} src={"/p4.png"} width="430" height={'300'} alt="Picture of the author"
  />
            </Box>
            <Box mt={"0"} w={"full"} h={"auto"} px={"10px"}>
              <Text
                alignItems={"center"}
                display={"flex"}
                fontSize={["70px"]}
                fontWeight={"700"}
                color={"#DFDFDF"}
              >
                04
                <Text color={"#06D6A0"}>.</Text>
                <Text
                  ml={"20px"}
                  w={"189px"}
                     fontSize={["25px"]}
                  fontWeight={"400"}
                  lineHeight={"25px"}
                  color={"#121212"}
                  letterSpacing={"2px"}
                >
                  Movie App
                </Text>
                <Link href="https://hngstage2-rho.vercel.app/">
                  <IconButton
                    height={"60px"}
                    w={"60px"}
                    border={"0.5px solid rgba(153, 162, 175, 0.60)"}
                    isRound={true}
                    color={"black"}
                    variant="solid"
                    colorScheme="none"
                    aria-label="Done"
                     fontSize="30px"
                    icon={<BsArrowUpRight />}
                  />
                </Link>
              </Text>
            </Box>
          </Box>
          
        </SimpleGrid>
      </Box>
    </>
  );
}

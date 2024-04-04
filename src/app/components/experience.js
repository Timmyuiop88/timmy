"use client";
import Image from "next/image";

import {
  Box,
  Stack,
  Text,
  Heading,
  Center,
  Hide,
  Show,
  Link,
} from "@chakra-ui/react";
export default function Exper() {
  return (
    <>
      <Box w={"full"} h={"500px"} pos={'relative'}>
        <Box pt={"10"}>
          <Text
            textAlign={"center"}
            textTransform={"uppercase"}
            fontSize={["14px", "14px", "24px", "24px"]}
            fontWeight={"400"}
            color={"#99A2AF"}
          >
            Working EXPERIENCE
          </Text>
          <Heading
            textAlign={"center"}
            textTransform={"uppercase"}
            fontSize={["30px", "30px", "70px", "96px"]}
            fontWeight={"700"}
            color={"#121212"}
          >
            EXPERIENCE
          </Heading>
        </Box>

        <Box
        bottom={'400'}
        left={'0'}
        position={'absolute'}
        rotate={'90deg'}
        >
          <Image src={'/me.png'} height={'100'} width={'100'} alt="alt"/>
        </Box>

        <Box h={"auto"} w={"full"} py={"10px"}>
          <Box
            h={"100"}
            w={"full"}
            borderBottom={"0.5px solid rgba(153, 162, 175, 0.60)"}
            maxW={"7xl"}
            m={"auto"}
            display={"flex"}
          >
            <Box
              h={"full"}
              w={"50%"}
              px={"10px"}
              display={"flex"}
              alignItems={"center"}
            >
              <Text
                alignItems={"center"}
                display={"flex"}
                fontSize={["70px"]}
                fontWeight={"700"}
                color={"#DFDFDF"}
              >
                01
                <Text color={"#06D6A0"}>.</Text>
              </Text>
              <Text
                ml={"20px"}
                w={"189px"}
                fontSize={["14px", "14px", "25px", "25px"]}
                fontWeight={"400"}
                lineHeight={"25px"}
                color={"#121212"}
                letterSpacing={"2px"}
              >
                FREELANCE
              </Text>
            </Box>
            <Box
              h={"full"}
              w={"50%"}
              px={"10px"}
              display={"flex"}
              justifyContent={"end"}
              alignItems={"center"}
            >
              <Text
                fontSize={["18px", "18px", "25px", "25px"]}
                fontWeight={"400"}
                color={"#99A2AF"}
              >
                2021 - TILL DATE
              </Text>
            </Box>
          </Box>
          <Box
            h={"100"}
            w={"full"}
            borderBottom={"0.5px solid rgba(153, 162, 175, 0.60)"}
            maxW={"7xl"}
            m={"auto"}
            display={"flex"}
          >
            <Box
              h={"full"}
              w={"50%"}
              px={"10px"}
              display={"flex"}
              alignItems={"center"}
            >
              <Text
                alignItems={"center"}
                display={"flex"}
                fontSize={["70px"]}
                fontWeight={"700"}
                color={"#DFDFDF"}
              >
                02
                <Text color={"#06D6A0"}>.</Text>
              </Text>
              <Text
                ml={"20px"}
                w={"189px"}
                fontSize={["14px", "14px", "25px", "25px"]}
                fontWeight={"400"}
                lineHeight={"25px"}
                color={"#121212"}
                letterSpacing={"2px"}
              >
               HNG INTERNSHIP



              </Text>
            </Box>
            <Box
              h={"full"}
              w={"50%"}
              px={"10px"}
              display={"flex"}
              justifyContent={"end"}
              alignItems={"center"}
            >
              <Text
                fontSize={["18px", "18px", "25px", "25px"]}
                fontWeight={"400"}
                color={"#99A2AF"}
              >
                 07/ 2023 - 09/ 2023
              </Text>
            </Box>
          </Box>
          <Box
            h={"100"}
           
            w={"full"}
            borderBottom={"0.5px solid rgba(153, 162, 175, 0.60)"}
            maxW={"7xl"}
            m={"auto"}
            display={"flex"}
          >
            <Box
         
              h={"full"}
              w={"50%"}
              px={"10px"}
              display={"flex"}
              alignItems={"center"}
            >
              <Text
                alignItems={"center"}
                display={"flex"}
                fontSize={["70px"]}
                fontWeight={"700"}
                color={"#DFDFDF"}
              >
                03
                <Text color={"#06D6A0"}>.</Text>
              </Text>
              <Text
                ml={"20px"}
          
                fontSize={["14px", "14px", "25px", "25px"]}
                fontWeight={"400"}
                lineHeight={"25px"}
                color={"#121212"}
                letterSpacing={"2px"}
              >
              WETIN DEY APP



              </Text>
            </Box>
            <Box
              h={"full"}
              w={"50%"}
              px={"10px"}
              display={"flex"}
              justifyContent={"end"}
              alignItems={"center"}
            >
              <Text
                fontSize={["18px", "18px", "25px", "25px"]}
                fontWeight={"400"}
                color={"#99A2AF"}

              >
              02/2021 - 11/2022


              </Text>
            </Box>
          </Box>
        </Box>

 
      </Box>
    </>
  );
}

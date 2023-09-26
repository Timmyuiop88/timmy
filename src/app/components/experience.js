
'use client'
import Image from "next/image";

import {
    Box,
    Stack,
    Text,
    Heading,
    Center,
    Hide,
    Show,
    Link
  } from "@chakra-ui/react";
  export default function Exper(){
    return(
        <>
        <Box
        w={'full'}
        h={'500px'}
 
        >
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


<Box>

    <Box
    borderBottom={'0.5px solid rgba(153, 162, 175, 0.60)'}
    w={'full'}
    h={'100px'}
  
    px={'5%'}
    display={'flex'}
    justifyContent={'space-between'}
    alignItems={'center'}
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
                <Text
                  ml={"20px"}
                  w={"189px"}
                     fontSize={["14px","14px","25px","25px"]}
                  fontWeight={"400"}
                  lineHeight={"25px"}
                  color={"#121212"}
                  letterSpacing={"2px"}
                >
               FREELANCE
                </Text>
                <Link href="https://google.com">
               
                </Link>
              </Text>
              <Text 
                 fontSize={["18px","18px","25px","25px"]}
              fontWeight={'400'}
              color={'#99A2AF'}
              >
           2021 - TILL DATE
              </Text>
    </Box>

    <Box
    borderBottom={'0.5px solid rgba(153, 162, 175, 0.60)'}
    w={'full'}
    h={'100px'}
  
    px={'5%'}
    display={'flex'}
    justifyContent={'space-between'}
    alignItems={'center'}
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
                <Text
                  ml={"20px"}
                  w={"189px"}
                     fontSize={["14px","14px","25px","25px"]}
                  fontWeight={"400"}
                  lineHeight={"25px"}
                  color={"#121212"}
                  letterSpacing={"2px"}
                >
                  HNG INTERNSHIP
                </Text>
                <Link href="https://google.com">
               
                </Link>
              </Text>
              <Text 
                 fontSize={["18px","18px","25px","25px"]}
              fontWeight={'400'}
              color={'#99A2AF'}
              >
           2023 - TILL DATE
              </Text>
    </Box>
</Box>

        </Box>
        </>
    )
}
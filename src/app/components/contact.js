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
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
export default function Contact() {
  return (
    <>
      <Box w={"full"} h={"500px"}>
        <Box pt={"10"}>
          <Text
            textAlign={"center"}
            textTransform={"uppercase"}
            fontSize={["14px", "14px", "24px", "24px"]}
            fontWeight={"400"}
            color={"#99A2AF"}
          >
            GOT AN IDEA?
          </Text>
          <Heading
            textAlign={"center"}
            textTransform={"uppercase"}
            fontSize={["30px", "30px", "70px", "96px"]}
            fontWeight={"700"}
            color={"#121212"}
          >
            LET’S CONNECT
          </Heading>
        </Box>
        <Center>
          <Input
            color={"#99A2AF"}
            fontSize={"24px"}
            fontWeight={400}
            htmlSize={4}
            width="full"
            maxW={"450px"}
            placeholder="NAME"
          />
        </Center>
        <Center
          pt={"20px"}
          color={"#99A2AF"}
          fontSize={"24px"}
          fontWeight={400}
        >
          <Input
            color={"#99A2AF"}
            fontSize={"24px"}
            fontWeight={400}
            htmlSize={4}
            width="full"
            maxW={"450px"}
            placeholder="EMAIL"
          />
        </Center>
        <Center pt={"20px"}>
          <Textarea
            color={"#99A2AF"}
            fontSize={"24px"}
            fontWeight={400}
            htmlSize={4}
            width="full"
            maxW={"450px"}
            placeholder="MESSAGE"
          />
        </Center>
        <Center
        pt={'20px'}
        >
        <Button
         h={'50px'}
         w={'450px'}
         m={'auto'}

         
bg={'#06D6A0'}>
            
            Send
        </Button>
        </Center>
        
      </Box>
    </>
  );
}

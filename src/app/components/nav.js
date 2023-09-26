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
  Link,
} from "@chakra-ui/react";
import { AiFillTwitterCircle,AiFillLinkedin,AiFillGithub } from "react-icons/ai";
export default function Nav(){
    return(
        <Box h={"80px"} w={"full"} bg={"#fefefe"} px={["5%","5%","10%","10%"]}>
        <Stack
          direction={"row"}
          w={"full"}
          h={"full"}
          alignItems={"center"}
          display={"flex"}
          justifyContent={"space-between"}
     
        >
          <Box w={"200px"} h={"50px"} display={"flex"} alignItems={"center"}>
            <Text
              fontSize={"24px"}
              fontWeight={"700"}
              color={"#121212"}
              pr={"5px"}
            >
              TIMILEHIN
            </Text>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <circle cx="6" cy="6" r="6" fill="#06D6A0" />
            </svg>
          </Box>
          <Show above="lg">
            <Box minW={"420px"} w={"auto"} h={"50px"}>
              <Stack
                direction={"row"}
                alignItems={"Center"}
                w={"full"}
                h={"full"}
                justifyContent={"center"}
                spacing={"20px"}
              >
                <Text fontSize={"18px"} fontWeight={"400"} color={"#121212"}>
                  Home.
                </Text>
                <Text fontSize={"18px"} fontWeight={"400"} color={"#121212"}>
                  Projects
                </Text>
                <Text fontSize={"18px"} fontWeight={"400"} color={"#121212"}>
                  Experience.
                </Text>
                <Text fontSize={"18px"} fontWeight={"400"} color={"#121212"}>
                  Skills
                </Text>
                <Text fontSize={"18px"} fontWeight={"400"} color={"#121212"}>
                  Contacts.
                </Text>
              </Stack>
            </Box>
          </Show>
          <Box display={'flex'} w={"auto"} h={"50px"} bg={""} alignItems={'center'}>

      
<Link href="https://www.linkedin.com/feed/" display={'flex'} >
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
  <mask id="mask0_8_18" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="25">
    <rect y="0.5" width="24" height="24" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_8_18)">
    <path d="M6 20.5C5.45 20.5 4.97933 20.3043 4.588 19.913C4.196 19.521 4 19.05 4 18.5V15.5H6V18.5H18V15.5H20V18.5C20 19.05 19.8043 19.521 19.413 19.913C19.021 20.3043 18.55 20.5 18 20.5H6ZM12 16.5L7 11.5L8.4 10.05L11 12.65V4.5H13V12.65L15.6 10.05L17 11.5L12 16.5Z" fill="#06D6A0"/>
  </g>
</svg>
Download Resume</Link>
<Box ml={'10px'} display={'flex'}>
<Link href="https://twitter.com/timmyENV">
<AiFillTwitterCircle/>
</Link><Link href="https://www.linkedin.com/feed/">
<AiFillLinkedin/>
</Link>
<Link href="https://github.com/Timmyuiop88/">
<AiFillGithub/>
</Link>
</Box>


          </Box>
        </Stack>
      </Box>
    )
}
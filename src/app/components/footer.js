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


export default function Footer() {
    return (
<>
<Box
w={'full'}
h={'80px'}
bg={'white'}
px={["5%","5%","10%","10%"]}
border={"0.5px solid rgba(153, 162, 175, 0.60)"}
display={'flex'}
alignItems={'center'}
justifyContent={'space-between'}
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
          </Box><Box w={"200px"} h={"50px"} display={"flex"} alignItems={"center"}>
            <Text
              fontSize={"14px"}
              fontWeight={"500"}
              color={"#99A2AF"}
              pr={"5px"}
            >
              adedaratimilehin.gold@gmail.com
            </Text>
          
          </Box>
</Box>
</>
    )
  }
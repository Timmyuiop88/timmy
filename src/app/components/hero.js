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
  } from "@chakra-ui/react";
export default function Hero(){
    return(
        <>
       
        <Box
        m={"auto"}
        w={"full"}
        h={"auto"}
        bg={""}
        display={"flex"}
        justifyContent={"center"}
      >
        <Box m={"auto"} w={"10%"} h={"300px"} bg={""} pt={"20"} pl={"10px"}>
          <Box pl={'10px'} h={"auto"} w={"full"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="49"
              height="49"
              viewBox="0 0 49 49"
              fill="none"
            >
              <path
                d="M0 0L4.05271 3.55646C15.7513 13.8226 33.2487 13.8226 44.9473 3.55646L49 0L45.3718 4.18023C35.2541 15.8375 35.2541 33.1625 45.3718 44.8198L49 49L44.8198 45.3718C33.1625 35.2541 15.8375 35.2541 4.18023 45.3718L0 49L3.62816 44.8198C13.7459 33.1625 13.7459 15.8375 3.62816 4.18023L0 0Z"
                fill="#06D6A0"
              />
            </svg>
          </Box>
        </Box>
        <Box w={"90%"} h={"full"} bg={""}>
          <Center w={"full"} h={"auto"}>
            <Image src={"/hero.png"} width={236} height={236} />
          </Center>
          <Box m={"auto"} w={"80%"} h={"auto"} bg={""} pb={'10'}>
            <Box
              m={"auto"}
              w={"200px"}
              h={"40px"}
              bg={""}
              display={"flex"}
              justifyContent={'center'}
              alignItems={"Center"}
            ><Box
            w={['25px','25px','40px','40px']}
            h={['25px','25px','40px','40px']}
            >
 <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 41 40"
                fill="none"
              >
                <mask
                  id="mask0_9_161"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="41"
                  height="40"
                >
                  <rect x="0.5" width="40" height="40" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_9_161)">
                  <path
                    d="M20.4998 19.9999C21.4165 19.9999 22.2015 19.6733 22.8548 19.0199C23.5071 18.3677 23.8332 17.5833 23.8332 16.6666C23.8332 15.7499 23.5071 14.9649 22.8548 14.3116C22.2015 13.6594 21.4165 13.3333 20.4998 13.3333C19.5832 13.3333 18.7987 13.6594 18.1465 14.3116C17.4932 14.9649 17.1665 15.7499 17.1665 16.6666C17.1665 17.5833 17.4932 18.3677 18.1465 19.0199C18.7987 19.6733 19.5832 19.9999 20.4998 19.9999ZM20.4998 32.2499C23.8887 29.1388 26.4026 26.3121 28.0415 23.7699C29.6804 21.2288 30.4998 18.9721 30.4998 16.9999C30.4998 13.9721 29.5343 11.4927 27.6032 9.56158C25.6732 7.63159 23.3054 6.66659 20.4998 6.66659C17.6943 6.66659 15.3259 7.63159 13.3948 9.56158C11.4648 11.4927 10.4998 13.9721 10.4998 16.9999C10.4998 18.9721 11.3193 21.2288 12.9582 23.7699C14.5971 26.3121 17.1109 29.1388 20.4998 32.2499ZM20.4998 36.6666C16.0276 32.861 12.6876 29.326 10.4798 26.0616C8.27095 22.7983 7.1665 19.7777 7.1665 16.9999C7.1665 12.8333 8.50706 9.51381 11.1882 7.04158C13.8682 4.56936 16.9721 3.33325 20.4998 3.33325C24.0276 3.33325 27.1315 4.56936 29.8115 7.04158C32.4926 9.51381 33.8332 12.8333 33.8332 16.9999C33.8332 19.7777 32.7293 22.7983 30.5215 26.0616C28.3126 29.326 24.9721 32.861 20.4998 36.6666Z"
                    fill="#06D6A0"
                  />
                </g>
              </svg>
            </Box>
             
              <Text
                fontSize={["14px","14px","24px","24px"]}
                fontWeight={"400"}
                color={"#121212"}
                ml={"10px"}
              >
              UNKNOWN
              </Text>
            </Box>

            <Box
       
          m={'auto'}
            bg={''}
            display={'flex'}
            justifyContent={'center'}
            >
              <Heading  fontSize={["30px","30px","70px","96px"]} fontWeight={"700"} color={"#121212"}>
                TIMILEHIN
              </Heading>

              <Box
              
        fontSize={["14px","14px","25px","38px"]} fontWeight={"400"} color={"#121212"}
              w={'auto'}
              bg={''}
              >
                <Text
                 fontSize={["14px","14px","25px","38px"]} fontWeight={"400"} color={"#121212"}
                >
                FULL-STACK 
                </Text>
                <Text
                 fontSize={["14px","14px","25px","38px"]} fontWeight={"400"} color={"#121212"}
                >
                DEVELOPER
                </Text>



              </Box>
            </Box>


            <Box
       alignItems={'center'}
           
       m={'auto'}
         bg={''}
         display={'flex'}
         justifyContent={'center'}
         >

<Box
display={'flex'}

     fontSize={["14px","14px","25px","38px"]} fontWeight={"400"} color={"#121212"}
           w={['35px','35px','111px','111px']}
           h={['24px','24px','84px','84px']}
           bg={''}
           >
             <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 111 85" fill="none">
<path d="M69.375 84.5L59.6625 74.35L84.2906 49.5H0V35.5H84.2906L59.6625 10.65L69.375 0.5L111 42.5L69.375 84.5Z" fill="#06D6A0"/>
</svg>


           </Box>


           <Heading  fontSize={["30px","30px","70px","96px"]} fontWeight={"700"} color={"#121212"}>
           ADEDARA
           </Heading>

           
         </Box>
         <Text
          fontSize={["14px","14px","24px","24px"]} fontWeight={"400"} color={"#99A2AF"}
         textTransform={'uppercase'}
         textAlign={'center'}
         >
        SELF-DIRECTED AND MOTIVATED WEB DEVELOPER WHO WORKS EFFECTIVELY IN A DYNAMIC ENVIRONMENT. FLUENT FRONT-END AND BACK-END DEVELOPMENT, WITH EXPERTISE IN ALL ASPECTS OF THE WEBSITES AND WEB APPLICATION DEVELOPMENT LIFE CYCLE, INCLUDING REQUIREMENTS ANALYSIS, DESIGN, DEVELOPMENT AND PRODUCTION SUPPORT. SKILLED AT DEVELOPING COMPLEX SOLUTIONS POSSESSING STRONG CREATIVE THINKING SKILLS, HIGH ENERGY AND INTEGRITY, PRECISELY EXECUTES DEVELOPMENT PROJECTS FROM CONCEPT TO DELIVERY.   </Text>

          </Box>
        </Box>

        <Box m={"auto"} w={"10%"} h={"full"} bg={""}>

        <svg xmlns="http://www.w3.org/2000/svg" width="49" height="49" viewBox="0 0 49 49" fill="none">
  <path d="M0 0L4.05271 3.55646C15.7513 13.8226 33.2487 13.8226 44.9473 3.55646L49 0L45.3718 4.18023C35.2541 15.8375 35.2541 33.1625 45.3718 44.8198L49 49L44.8198 45.3718C33.1625 35.2541 15.8375 35.2541 4.18023 45.3718L0 49L3.62816 44.8198C13.7459 33.1625 13.7459 15.8375 3.62816 4.18023L0 0Z" fill="#FFC700"/>
</svg>
        </Box>
      </Box>

      </>
    )
}
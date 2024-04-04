import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";

import {
  Box,
  Button,
  HStack,
  Heading,
  Text,
  Stack,
  Avatar,
} from "@chakra-ui/react";
const imageLoader = ({ src, width, quality }) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`
}
export default function Testimonial() {
  return (
    <Box w={"full"} h={"auto"} py={10}>
      <Box
        h={100}
        w={"full"}
        maxW={"7xl"}
        px={"20px"}
        m={"auto"}
        justifyContent={"space-between"}
        display={"flex"}
      >
        <Box
          display={"flex"}
          justifyContent={"flex-end"}
          w={"auto"}
          h={"full"}
          flexDirection={"column"}
        >
          <Text>PROJECTS</Text>
          <Heading>RECENT PROJECTS</Heading>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"flex-end"}
          w={"auto"}
          h={"full"}
          flexDirection={"column"}
        >
          <Button width={"50px"} height={"50px"} borderRadius={"50%"}>
            <FaArrowRight />
          </Button>
        </Box>
      </Box>

      <Box w={"full"} h={"auto"} maxW={"7xl"} pt={"20px"} m={"auto"}>
        <Box
          sx={{
            "::-webkit-scrollbar": {
              display: "none",
            },
          }}
          display={"flex"}
          w={"full"}
          h={"auto"}
          p={"20px"}
          justifyContent={"space-between"}
          overflowX={"scroll"}
        >
          <Box
            mr={"10px"}
            minW={"300px"}
            h={"250px"}
            w={"300px"}
            borderRadius={"20px"}
            border={"1px solid #999"}
            p={"20px"}
            position={"relative"}
          >
            <Box
              bottom={"150px"}
              left={"245px"}
              position={"absolute"}
              zIndex={"999"}
            >
              <Image src="/quote.svg" alt="quote" height={"50"} width={"50"} />
            </Box>
            <Box
              w={"full"}
              height={"50"}
              color={"#8e8893"}
              display={"flex"}
              justifyContent={"center"}
              gap={"10px"}
              py={"10px"}
            >
              <Box
                height={"auto"}
                width={"auto"}
                padding={"5px"}
                px={"10px"}
                bg={"#eceff2"}
                borderRadius={"15px"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Text>Next.Js</Text>
              </Box>
              <Box
                height={"auto"}
                width={"auto"}
                padding={"5px"}
                px={"10px"}
                bg={"#eceff2"}
                borderRadius={"15px"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Text>Chakra UI</Text>
              </Box>
              <Box
                height={"auto"}
                width={"auto"}
                padding={"5px"}
                px={"10px"}
                bg={"#eceff2"}
                borderRadius={"15px"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Text>CSS</Text>
              </Box>
            </Box>
            <Box w={"256"} height={"124"} border={"1px solid #999"}>
              <Image
            
                src={"/pr1.png"}
                height={"200"}
                width={"300"}
                alt="project thumbnail"
              />
            </Box>
            <Box px={"10px"} w={"full"} h={"10"} display={"flex"}>
              <Heading
                mr={"10px"}
                fontSize={"30px"}
                display={"flex"}
                alignItems={"center"}
              >
                01
                <Text color={"#75c7aa"} fontSize={"22px"}>
                  .
                </Text>
              </Heading>
              <a href="https://givaavv1.vercel.app/">
                <Text
                  mt={"5px"}
                  fontSize={"18px"}
                  display={"flex"}
                  gap={"10px"}
                  alignItems={"center"}
                  color={"#08d6a0"}
                >
                  GIVAA 1.0 <FaExternalLinkAlt />
                </Text>
              </a>
            </Box>
          </Box>





          

          <Box
            mr={"10px"}
            minW={"300px"}
            h={"250px"}
            w={"300px"}
            borderRadius={"20px"}
            border={"1px solid #999"}
            p={"20px"}
            position={"relative"}
          >
            <Box
              bottom={"150px"}
              left={"245px"}
              position={"absolute"}
              zIndex={"999"}
            >
              <Image src="/quote.svg" alt="quote" height={"50"} width={"50"} />
            </Box>
            <Box
              w={"full"}
              height={"50"}
              color={"#8e8893"}
              display={"flex"}
              justifyContent={"center"}
              gap={"10px"}
              py={"10px"}
            >
              <Box
                height={"auto"}
                width={"auto"}
                padding={"5px"}
                px={"10px"}
                bg={"#eceff2"}
                borderRadius={"15px"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Text>Next.Js</Text>
              </Box>
              <Box
                height={"auto"}
                width={"auto"}
                padding={"5px"}
                px={"10px"}
                bg={"#eceff2"}
                borderRadius={"15px"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Text>SupaBase</Text>
              </Box>
              <Box
                height={"auto"}
                width={"auto"}
                padding={"5px"}
                px={"10px"}
                bg={"#eceff2"}
                borderRadius={"15px"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Text>CSS</Text>
              </Box>
            </Box>
            <Box w={"256"} height={"124"} border={"1px solid #999"}>
              <Image
                src={"/pr2.png"}
                height={"200"}
                width={"300"}
                alt="project thumbnail"
              />
            </Box>
            <Box
            
              fontSize={"18px"}
              display={"flex"}
              alignItems={"center"}
            >
              <Heading
                mr={"10px"}
                fontSize={"30px"}
                display={"flex"}
                alignItems={"center"}
              >
                02
                <Text color={"#75c7aa"} fontSize={"22px"}>
                  .
                </Text>
              </Heading>



              <a href="https://giv-one.vercel.app/">
                <Text
                  mt={"5px"}
                  fontSize={"18px"}
                  display={"flex"}
                  gap={"10px"}
                  alignItems={"center"}
                  color={"#08d6a0"}
                >
                  GIVAA 2.0 <FaExternalLinkAlt />
                </Text>
              </a>

            </Box>
          </Box>

          <Box
            mr={"10px"}
            minW={"300px"}
            h={"250px"}
            w={"300px"}
            bg={"white"}
            borderRadius={"20px"}
            border={"1px solid #999"}
            p={"20px"}
            position={"relative"}
          >
            <Box
              bottom={"150px"}
              left={"245px"}
              position={"absolute"}
              zIndex={"999"}
            >
              <Image src="/quote.svg" alt="quote" height={"50"} width={"50"} />
            </Box>
            <Box
              w={"full"}
              height={"50"}
              color={"#8e8893"}
              display={"flex"}
              justifyContent={"center"}
              gap={"10px"}
              py={"10px"}
            >
              <Box
                height={"auto"}
                width={"auto"}
                padding={"5px"}
                px={"10px"}
                bg={"#eceff2"}
                borderRadius={"15px"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Text>React.Js</Text>
              </Box>
              <Box
                height={"auto"}
                width={"auto"}
                padding={"5px"}
                px={"10px"}
                bg={"#eceff2"}
                borderRadius={"15px"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Text>CSS</Text>
              </Box>
              <Box
                height={"auto"}
                width={"auto"}
                padding={"5px"}
                px={"10px"}
                bg={"#eceff2"}
                borderRadius={"15px"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Text>Rapid API</Text>
              </Box>
            </Box>
            <Box w={"256"} height={"124"} border={"1px solid #999"}>
              <Image
                src={"/pr3.png"}
                height={"200"}
                width={"300"}
                alt="project thumbnail"
              />
            </Box>
            <Box
             
              fontSize={"18px"}
              display={"flex"}
              alignItems={"center"}
            >
              <Heading
                mr={"10px"}
                fontSize={"30px"}
                display={"flex"}
                alignItems={"center"}
              >
                03
                <Text color={"#75c7aa"} fontSize={"22px"}>
                  .
                </Text>
              </Heading>
            <a href="https://hngstage2-rho.vercel.app/">
                <Text
                  mt={"5px"}
                  fontSize={"18px"}
                  display={"flex"}
                  gap={"10px"}
                  alignItems={"center"}
                  color={"#08d6a0"}
                >
                  MOVIE APP <FaExternalLinkAlt />
                </Text>
              </a>

              
              
            </Box>
          </Box>

          <Box
            mr={"10px"}
            minW={"300px"}
            h={"250px"}
            w={"300px"}
            bg={"white"}
            borderRadius={"20px"}
            border={"1px solid #999"}
            p={"20px"}
            position={"relative"}
          >
            <Box
              bottom={"150px"}
              left={"245px"}
              position={"absolute"}
              zIndex={"999"}
            >
              <Image src="/quote.svg" alt="quote" height={"50"} width={"50"} />
            </Box>
            <Box
              w={"full"}
              height={"50"}
              color={"#8e8893"}
              display={"flex"}
              justifyContent={"center"}
              gap={"10px"}
              py={"10px"}
            >
              <Box
                height={"auto"}
                width={"auto"}
                padding={"5px"}
                px={"10px"}
                bg={"#eceff2"}
                borderRadius={"15px"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Text>React.Js</Text>
              </Box>
              <Box
                height={"auto"}
                width={"auto"}
                padding={"5px"}
                px={"10px"}
                bg={"#eceff2"}
                borderRadius={"15px"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Text>Node.Js</Text>
              </Box>

              <Box
                height={"auto"}
                width={"auto"}
                padding={"5px"}
                px={"10px"}
                bg={"#eceff2"}
                borderRadius={"15px"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Text>Postman</Text>
              </Box>
            </Box>
            <Box w={"256"} height={"124"} border={"1px solid #999"}>

              <Image
                src={"/pr4.png"}
                height={"200"}
                width={"300"}
                alt="project thumbnail"
              />
            </Box>
            <Box
            
              fontSize={"18px"}
              display={"flex"}
              alignItems={"center"}
            >
              <Heading
                mr={"10px"}
                fontSize={"30px"}
                display={"flex"}
                alignItems={"center"}
              >
                04
                <Text color={"#75c7aa"} fontSize={"22px"}>
                  .
                </Text>
              </Heading>
    <a href="https://email-git-main-timmyuiop88.vercel.app/">
                <Text
                  mt={"5px"}
                  fontSize={"18px"}
                  display={"flex"}
                  gap={"10px"}
                  alignItems={"center"}
                  color={"#08d6a0"}
                >
                   EMAIL SERVICE <FaExternalLinkAlt />
                </Text>
              </a>


             
            </Box>
          </Box>

          <Box
            mr={"10px"}
            minW={"300px"}
            h={"250px"}
            w={"300px"}
            bg={"white"}
            borderRadius={"20px"}
            border={"1px solid #999"}
            p={"20px"}
            position={"relative"}
          >
            <Box
              bottom={"150px"}
              left={"245px"}
              position={"absolute"}
              zIndex={"999"}
            >
              <Image src="/quote.svg" alt="quote" height={"50"} width={"50"} />
            </Box>
            <Box
              w={"full"}
              height={"50"}
              color={"#8e8893"}
              display={"flex"}
              justifyContent={"center"}
              gap={"10px"}
              py={"10px"}
            >
              <Box
                height={"auto"}
                width={"auto"}
                padding={"5px"}
                px={"10px"}
                bg={"#eceff2"}
                borderRadius={"15px"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Text>WordPress</Text>
              </Box>
              <Box
                height={"auto"}
                width={"auto"}
                padding={"5px"}
                px={"10px"}
                bg={"#eceff2"}
                borderRadius={"15px"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Text>PHP</Text>
              </Box>
              <Box
                height={"auto"}
                width={"auto"}
                padding={"5px"}
                px={"10px"}
                bg={"#eceff2"}
                borderRadius={"15px"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Text>SEO</Text>
              </Box>
            </Box>
            <Box w={"256"} height={"124"} border={"1px solid #999"}>

              <Image
                src={"/pr5.png"}
                height={"200"}
                width={"300"}
                alt="project thumbnail"
              />
            </Box>
            <Box
            
              fontSize={"18px"}
              display={"flex"}
              alignItems={"center"}
            >
              <Heading
                mr={"10px"}
                fontSize={"30px"}
                display={"flex"}
                alignItems={"center"}
              >
                05
                <Text color={"#75c7aa"} fontSize={"22px"}>
                  .
                </Text>
              </Heading>

        <a href="https://drkautopads.com/">
                <Text
                  mt={"5px"}
                  fontSize={"18px"}
                  display={"flex"}
                  gap={"10px"}
                  alignItems={"center"}
                  color={"#08d6a0"}
                >
                   AUTOPARTS STORE   <FaExternalLinkAlt />
                </Text>
              </a>


            </Box>
          </Box>

          <Box
            mr={"10px"}
            minW={"300px"}
            h={"250px"}
            w={"300px"}
            bg={"white"}
            borderRadius={"20px"}
            border={"1px solid #999"}
            p={"20px"}
            position={"relative"}
          >
            <Box
              bottom={"150px"}
              left={"245px"}
              position={"absolute"}
              zIndex={"999"}
            >
              <Image src="/quote.svg" alt="quote" height={"50"} width={"50"} />
            </Box>
            <Box
              w={"full"}
              height={"50"}
              color={"#8e8893"}
              display={"flex"}
              justifyContent={"center"}
              gap={"10px"}
              py={"10px"}
            >
              <Box
                height={"auto"}
                width={"auto"}
                padding={"5px"}
                px={"10px"}
                bg={"#eceff2"}
                borderRadius={"15px"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Text>WordPress</Text>
              </Box>
              <Box
                height={"auto"}
                width={"auto"}
                padding={"5px"}
                px={"10px"}
                bg={"#eceff2"}
                borderRadius={"15px"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Text>PHP</Text>
              </Box>
              <Box
                height={"auto"}
                width={"auto"}
                padding={"5px"}
                px={"10px"}
                bg={"#eceff2"}
                borderRadius={"15px"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Text>SEO</Text>
              </Box>
            </Box>
            <Box w={"256"} height={"124"} border={"1px solid #999"}>

              <Image
                src={"/pr6.png"}
                height={"200"}
                width={"300"}
                alt="project thumbnail"
              />
            </Box>
            <Box
         
              fontSize={"18px"}
              display={"flex"}
              alignItems={"center"}
            >
              <Heading
                mr={"10px"}
                fontSize={"30px"}
                display={"flex"}
                alignItems={"center"}
              >
                06
                <Text color={"#75c7aa"} fontSize={"22px"}>
                  .
                </Text>
              </Heading>
              
              <a href="https://tradeplaceng.com/">
                <Text
                  mt={"5px"}
                  fontSize={"18px"}
                  display={"flex"}
                  gap={"10px"}
                  alignItems={"center"}
                  color={"#08d6a0"}
                >
                  TRADE PLACE NG   <FaExternalLinkAlt />
                </Text>
              </a>



              
            </Box>
          </Box>

          <Box
            mr={"10px"}
            minW={"300px"}
            h={"250px"}
            w={"300px"}
            bg={"white"}
            borderRadius={"20px"}
            border={"1px solid #999"}
            p={"20px"}
            position={"relative"}
          >
            <Box
              bottom={"150px"}
              left={"245px"}
              position={"absolute"}
              zIndex={"999"}
            >
              <Image src="/quote.svg" alt="quote" height={"50"} width={"50"} />
            </Box>
            <Box
              w={"full"}
              height={"50"}
              color={"#8e8893"}
              display={"flex"}
              justifyContent={"center"}
              gap={"10px"}
              py={"10px"}
            >
              <Box
                height={"auto"}
                width={"auto"}
                padding={"5px"}
                px={"10px"}
                bg={"#eceff2"}
                borderRadius={"15px"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Text>Next.Js</Text>
              </Box>
              <Box
                height={"auto"}
                width={"auto"}
                padding={"5px"}
                px={"10px"}
                bg={"#eceff2"}
                borderRadius={"15px"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Text>Clerk </Text>
              </Box>
              <Box
                height={"auto"}
                width={"auto"}
                padding={"5px"}
                px={"10px"}
                bg={"#eceff2"}
                borderRadius={"15px"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Text>WebHooks</Text>
              </Box>
            </Box>
            <Box w={"256"} height={"124"} border={"1px solid #999"}>

              <Image
                src={"/pr7.png"}
                height={"200"}
                width={"300"}
                alt="project thumbnail"
              />
            </Box>
            <Box
          
              fontSize={"18px"}
              display={"flex"}
              alignItems={"center"}
            >
              <Heading
                mr={"10px"}
                fontSize={"30px"}
                display={"flex"}
                alignItems={"center"}
              >
                07
                <Text color={"#75c7aa"} fontSize={"22px"}>
                  .
                </Text>
              </Heading>
               <a href="https://newsletter-git-main-timmyuiop88.vercel.app/">  
                <Text
                  mt={"5px"}
                  fontSize={"18px"}
                  display={"flex"}
                  gap={"10px"}
                  alignItems={"center"}
                  color={"#08d6a0"}
                >
                    LANDING PAGE  <FaExternalLinkAlt />
                </Text>
              </a>



            
            </Box>
          </Box>

          <Box
            mr={"10px"}
            minW={"300px"}
            h={"250px"}
            w={"300px"}
            bg={"white"}
            borderRadius={"20px"}
            border={"1px solid #999"}
            p={"20px"}
            position={"relative"}
          >
            <Box
              bottom={"150px"}
              left={"245px"}
              position={"absolute"}
              zIndex={"999"}
            >
              <Image src="/quote.svg" alt="quote" height={"50"} width={"50"} />
            </Box>
            <Box
              w={"full"}
              height={"50"}
              color={"#8e8893"}
              display={"flex"}
              justifyContent={"center"}
              gap={"10px"}
              py={"10px"}
            >
              <Box
                height={"auto"}
                width={"auto"}
                padding={"5px"}
                px={"10px"}
                bg={"#eceff2"}
                borderRadius={"15px"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Text>Next.Js</Text>
              </Box>
              <Box
                height={"auto"}
                width={"auto"}
                padding={"5px"}
                px={"10px"}
                bg={"#eceff2"}
                borderRadius={"15px"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Text>Next.Js</Text>
              </Box>
              <Box
                height={"auto"}
                width={"auto"}
                padding={"5px"}
                px={"10px"}
                bg={"#eceff2"}
                borderRadius={"15px"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Text>Next.Js</Text>
              </Box>
            </Box>
            <Box w={"256"} height={"124"} border={"1px solid #999"}>

              <Image
                src={"/pr8.png"}
                height={"200"}
                width={"300"}
                alt="project thumbnail"
              />
            </Box>
            <Box
             
              fontSize={"18px"}
              display={"flex"}
              alignItems={"center"}
            >
              <Heading
                mr={"10px"}
                fontSize={"30px"}
                display={"flex"}
                alignItems={"center"}
              >
                08
                <Text color={"#75c7aa"} fontSize={"22px"}>
                  .
                </Text>
              </Heading>
              <Text >PORTFOLIO</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

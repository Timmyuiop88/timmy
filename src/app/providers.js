
'use client'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { CacheProvider } from '@chakra-ui/next-js'
import { useState, useEffect } from "react";

const theme = extendTheme({
    fonts: {
        heading: `'Mukta', sans-serif`,
        body: `'Mukta', sans-serif`,
      }
    
  
  })
export default function ThemeProvider({ children }) {

  return (
    <CacheProvider>
    <ChakraProvider theme={theme}>
      {children}
    </ChakraProvider >
    </CacheProvider>
  );
}
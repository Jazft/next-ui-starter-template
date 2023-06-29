// ===== General Imports | File: _app.js ==== //

import React from 'react';
import { AppProps } from 'next/app';
import { NextUIProvider, createTheme } from "@nextui-org/react";
import "@/src/styles/globals.css";
import { fontPoppins } from '@/config/mainFonts';

const appTheme = createTheme({
  type: "light",
  theme: {
    colors: {},
    fonts: {},
    space: {},
  }
})

// ===== App: MyApp ==== //

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={appTheme}>
        <style jsx global>{`
        :root {
          ---nextui-font-poppins: ${fontPoppins.style.fontFamily};
        }
      `}</style>
         <Component  {...pageProps} />
    </NextUIProvider>
  );
}
export default MyApp;


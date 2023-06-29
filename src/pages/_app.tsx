// ===== General Imports | File: _app.js ==== //

import React from 'react';
import { AppProps } from 'next/app';
import { NextUIProvider } from "@nextui-org/react";
import "@/src/styles/globals.css";
import { lightTheme } from '@/config/theme';


// ===== App: MyApp ==== //

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={lightTheme}>
         <Component  {...pageProps} />
    </NextUIProvider>
  );
}
export default MyApp;


// ===== General Imports | File: _app.js ==== //

import Head from 'next/head'
import { AppProps } from 'next/app';
import { NextUIProvider, createTheme } from "@nextui-org/react";
import "@/styles/globals.css";

// ===== App: MyApp ==== //

const theme = createTheme({
  type: "dark", // it could be "light" or "dark"
  theme: {
    colors: {
      // brand colors
      primaryLight: '$green200',
      primaryLightHover: '$green300',
      primaryLightActive: '$green400',
      primaryLightContrast: '$green600',
      primary: '#7542f5',
      primaryBorder: '$green500',
      primaryBorderHover: '$green600',
      primarySolidHover: '$green700',
      primarySolidContrast: '$white',
      primaryShadow: '$green500',

      gradient: 'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
      link: '#5E1DAD',

      // you can also create your own color
      myColor: '#ff4ecd'

      // ...  more colors
    },
    space: {},
    fonts: {}
  }
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    
    <NextUIProvider theme={theme}>
          <Head>
            <title>NextUI ⎯ Loaded</title>
          </Head>
         <Component  {...pageProps} />
    </NextUIProvider>
  );
}
export default MyApp;
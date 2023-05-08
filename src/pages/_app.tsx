// ===== General Imports | File: _app.js ==== //

import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import { AppProps } from 'next/app';
import { NextUIProvider, createTheme } from "@nextui-org/react";
import "@/styles/globals.css";
import loader from '@/pages/components/Loader'

// ===== App: MyApp ==== //


function MyApp({ Component, pageProps }: AppProps) {

  // ====== Loader Code ===== //

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.addEventListener('load', () => {
      setLoading(false);
    });
  }, []);

  // ====== Loader Code End  ===== //

  return (
    <NextUIProvider>
      <Head>
        <title>NextUI ⎯ Loaded</title>
      </Head>
      {loading && <loader />}
      <Component  {...pageProps} />
    </NextUIProvider>
  );
}
export default MyApp;
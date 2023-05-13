// ===== General Exports ==== //

import React, { useState } from "react";
import { Text, Container } from "@nextui-org/react";
import { Poppins } from 'next/font/google'

const pp = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  display: 'swap',
});

// ===== Function Index() ==== //ap

export default function Home() {
  return (
    <>
     <Container css={{ p: '$10 $14' }}>
        <Text className={pp.className}> <b>NextUI + NextJS:</b> Loaded</Text>
     </Container>
    </>
  );
}

// ===== General Exports ==== //

import React from "react";
import { Loading, Row, Spacer, Text } from "@nextui-org/react";
import Bold from '#componentsBold'
import {Poppins} from 'next/font/google'

const pp = Poppins({
    subsets: ['latin'],
    weight: ['300', '400', '600'],
    display: 'swap',
});

// ===== Function Main() ==== //

export default function Loader() {
  return (
    <>
      <Row css={{ height: '100vh', flexDirection: 'column' }} justify="center" align="center">
        <Text className={pp.className} color="$dark" h2>Google MetaPreview</Text>
        <Spacer y={0.5}/>
        <Loading />
      </Row>
    </>
  );
}

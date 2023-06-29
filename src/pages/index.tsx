// ===== General Exports | File: index.tsx ==== //

import React from "react";
import PageLayout from "@/layouts/Layout";
import { Text, Container } from "@nextui-org/react";
import { externalStyles } from "@/types/containers/main";

// ===== Function Home() ==== //ap

export default function Home() {
  return (
    <>
      <PageLayout>
        <Container  {...externalStyles}>
          <Text h3 weight={'normal'}> 😎 Welcome to your <b>NextUI</b> Template! 🎉</Text>
        </Container>
      </PageLayout>
    </>
  );
}

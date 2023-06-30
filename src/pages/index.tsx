// ===== General Exports | File: index.tsx ==== //

import React from "react";
import PageLayout from "@/layouts/Layout";
import { Text, Container, Grid, textWeights, Link, Button, Row } from "@nextui-org/react";
import { siteConfig } from "@/config/siteMeta";

// ===== Function Home() ==== //ap

export default function Home() {
  const styles =  {
     minHeight: '100vh',
     flexDirection: 'column',
     textAlign: 'center !important',
     gap: '$4' 
  }
  return (
    <>
      <PageLayout title="NextUI + Next.js">

        <Row align="center" justify="center" css={styles}>
            <Text h3> Welcome to your <b>NextUI</b> Template! 🎉</Text>
            <Text h5 weight={'normal'}> Start editing <b>index.tsx</b> or <b>_app.tsx</b> to customize your app.</Text>
            <Link href={siteConfig.repo} css={{ marginTop: '$5' }}><Button>Github</Button></Link>
        </Row>

      </PageLayout>
    </>
  );
}

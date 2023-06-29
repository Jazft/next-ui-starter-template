// ===== General Exports | File: index.tsx ==== //

import React from "react";
import PageLayout from "@/layouts/Layout";
import { Text, Container, Grid, textWeights } from "@nextui-org/react";

// ===== Function Home() ==== //ap

export default function Home() {
  const styles =  {
     minHeight: '100vh',
     flexDirection: 'column',
     textAlign: 'center !important',
  }
  return (
    <>
      <PageLayout title="NextUI + Next.js">
         <Grid.Container justify="center" alignContent="center" css={styles}>
           <Grid>
              <Text h3> Welcome to your <b>NextUI</b> Template! 🎉</Text>
           </Grid>
           <Grid>
              <Text h5 weight={'normal'}> Start editing <b>index.tsx</b> or <b>_app.tsx</b> to customize your app.</Text>
           </Grid>
         </Grid.Container>
      </PageLayout>
    </>
  );
}

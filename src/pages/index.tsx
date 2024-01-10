// ===== General Exports | File: index.tsx ==== //

import React from "react";
import PageLayout from "@/layouts/Layout";
import { Text, Container, Grid, textWeights, Link, Button, Row, Image } from "@nextui-org/react";
import { siteConfig } from "@/config/siteMeta";

// ===== Function Home() ==== //

export default function Home() {
  const containerStyles = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '2rem',
  };

  const imageStyles = {
    width: '200px',
    borderRadius: '50%',
    marginBottom: '1rem',
  };

  return (
    <PageLayout title="NextUI + Next.js">
      <Container css={containerStyles}>
        <Image
          src="/path/to/your/image.jpg"
          alt="Your Logo"
          style={imageStyles}
        />
        <Text h3>Welcome to your NextUI Template! 🎉</Text>
        <Text p>
          Start editing <b>index.tsx</b> or <b>_app.tsx</b> to customize your app.
        </Text>
        <Link href={siteConfig.repo} style={{ marginTop: '1.5rem' }}>
          <Button>Github</Button>
        </Link>
      </Container>
    </PageLayout>
  );
}


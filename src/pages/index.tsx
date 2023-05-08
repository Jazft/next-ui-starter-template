// ===== General Exports ==== //

import React from "react";
import { Text, Row, Spacer, Loading, Container, Input } from "@nextui-org/react";
import NavBar from '@/pages/components/Navbar'
import Main from '@/pages/components/Loader'
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
      <Row css={{ height: '100vh', flexDirection: 'column' }} justify="center" align="center">
        <Text className={pp.className} color="$dark" h3>Google MetaPreview</Text>

        <Container>
          <Container sm>
            <Row>
              <Row css={{ flexDirection: 'column' }}>
                <Text className="label" h6 b>Website URL:</Text>
                <Input placeholder="www.example.com" color="primary" css={{ $$inputColor: "#eee", $$inputBorderColor: '#ccc' }} bordered borderWeight="light" style={{ color: '#000' }} />
                <Spacer inline />
                <Text className="label" h6 b>Title:</Text>
                <Input placeholder="My Website" color="primary" css={{ $$inputColor: "#eee", $$inputBorderColor: '#ccc' }} bordered borderWeight="light" style={{ color: '#000' }} />
                <Spacer inline />
                <Text className="label" h6 b>Description:</Text>
                <Input placeholder="This is my website description! Wow!" color="primary" css={{ $$inputColor: "#eee", $$inputBorderColor: '#ccc' }} bordered borderWeight="light" style={{ color: '#000' }} />
              </Row>
              <Row>
                
              </Row>

            </Row>


          </Container>
        </Container>

      </Row>
    </>
  );
}

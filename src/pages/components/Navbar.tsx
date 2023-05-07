// ===== General Exports ==== //

import React from "react";
import { Container, Text, Row, Button, Input, Spacer } from '@nextui-org/react';
import { VariantsSelectorWrapper } from "@/components/VariantSelectorWrapper";
import { Poppins } from 'next/font/google'
import Bold from '#componentsBold'
import { UserIcon } from "./UserIcon";

const lt = Poppins({
    subsets: ['latin'],
    weight: ['300', '400'],
    display: 'swap',
});

// ===== Function Main() ==== //

export default function Home() {
    return (
        <>
            <Row justify="center" align="center" css={{ height: '100vh', flexDirection: 'column' }}>
               <Input labelPlaceholder="Your Username" color="primary"  style={{ color: '#ccc', padding: '10px'}} className="placeholder"  />
                <Spacer y={0.5} />
               <Input placeholder="Next UI" />
            </Row>
        </>
    );
}

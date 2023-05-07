// ===== General Exports ==== //

import React from "react";
import { Container, Text, Row, Button, Input, Spacer } from '@nextui-org/react';
import { Poppins } from 'next/font/google'
import Bold from '#componentsBold'
import { UnLockIcon } from "./UnlockIcon";
import { LockIcon } from "./LockIcon";

const lt = Poppins({
    subsets: ['latin'],
    weight: ['300', '400', '600'],
    display: 'swap',
});

// ===== Function Main() ==== //

export default function Home() {
    return (
        <>
            <Row justify="center" className={lt.className} align="center" css={{ height: '100vh', flexDirection: 'column' }}>
                <Text h2 className={lt.className} id="loginTitle" weight="semibold">Create new account <b>.</b> </Text>
                <Spacer y={1.5} />
                <Input width="13em" required  size="sm" labelPlaceholder="Your Username" color="primary" style={{ color: '#ccc', padding: '10px' }} className="placeholder" />
                <Spacer y={1.5} />
                <Input.Password width="13em" size="sm" labelPlaceholder="Password"  color="primary"/>
                <Spacer y={1.5} />
                <Button type="submit"  size='xs'  auto css={{ px: "$20", py: '$7' }} >Login</Button>
            </Row>
        </>
    );
}

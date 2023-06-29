// ===== General Imports | File: generalLayout.tsx ==== //

import NextHead from "next/head";
import { siteConfig } from "@/config/siteMeta";
import React from "react";

interface Props {
	title?: string;
	children: React.ReactNode;
}

export default function PageLayout({ children, title }:Props) {
	return (
		<main>
			<NextHead>
				<title>{ title || siteConfig.name }</title>
				<meta key="title" content={siteConfig.name} property="og:title" />
				<meta content={siteConfig.description} property="og:description" />
				<meta content={siteConfig.description} name="description" />
				<meta
					key="viewport"
					content="viewport-fit=cover, width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
					name="viewport"
				/>
				<link href="/favicon.ico" rel="icon" />
			</NextHead>
			{children}
		</main>
	);
}

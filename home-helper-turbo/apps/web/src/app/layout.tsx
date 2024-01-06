/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import "../styles/globals.css";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";

import { ClerkProvider } from "@clerk/nextjs";
import { PropsWithChildren } from "react";
import { Metadata } from "next";
import { ClientsProviders } from "app/_provider/ClientsProviders";
import { ColorSchemeScript } from "@mantine/core";

// eslint-disable-next-line no-unused-vars
const metadata: Metadata = {
  title: "Home-Helper",
  description: "うちのアプリです",
};

const Layout = ({ children }: PropsWithChildren) => (
  <html lang={"ja"}>
    <head>
      <ColorSchemeScript />
    </head>
    <body>
      <ClerkProvider>
        <ClientsProviders>{children}</ClientsProviders>
      </ClerkProvider>
    </body>
  </html>
);

export default Layout;

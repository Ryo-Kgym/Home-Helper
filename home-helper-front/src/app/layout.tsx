import "../styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { PropsWithChildren } from "react";
import { Metadata } from "next";
import { ClientsProviders } from "app/_provider/ClientsProviders";

// eslint-disable-next-line no-unused-vars
const metadata: Metadata = {
  title: "Home-Helper",
  description: "うちのアプリです",
};

const Layout = ({ children }: PropsWithChildren) => (
  <html lang={"ja"}>
    <body>
      <ClerkProvider>
        <ClientsProviders>{children}</ClientsProviders>
      </ClerkProvider>
    </body>
  </html>
);

export default Layout;

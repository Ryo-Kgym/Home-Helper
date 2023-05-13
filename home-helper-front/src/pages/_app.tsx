import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NotificationsProvider } from "@mantine/notifications";
import { MantineProvider } from "@mantine/core";
import { client } from "@graphql/postgraphile/client";
import { Provider } from "urql";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "@provider/Authentication/AuthProvider";
import { RecoilRoot } from "recoil";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <RecoilRoot>
        <AuthProvider>
          <Provider value={client}>
            <MantineProvider withNormalizeCSS withGlobalStyles>
              <NotificationsProvider>
                <Component {...pageProps} />
                <Toaster />
              </NotificationsProvider>
            </MantineProvider>
          </Provider>
        </AuthProvider>
      </RecoilRoot>
    </SessionProvider>
  );
}

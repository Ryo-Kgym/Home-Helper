import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NotificationsProvider } from "@mantine/notifications";
import { MantineProvider } from "@mantine/core";
import { client } from "@graphql/postgraphile/client";
import { Provider } from "urql";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider value={client}>
      <MantineProvider withNormalizeCSS withGlobalStyles>
        <NotificationsProvider>
          <Component {...pageProps} />
        </NotificationsProvider>
      </MantineProvider>
    </Provider>
  );
}

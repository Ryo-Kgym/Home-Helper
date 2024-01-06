/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

"use client";

import { PropsWithChildren } from "react";
import { RecoilRoot } from "recoil";
import { datasource } from "@graphql/datasource";
import { MantineProvider } from "@mantine/core";
import { Toaster } from "react-hot-toast";
import { Provider as UrqlProvider } from "urql";

export const ClientsProviders = ({ children }: PropsWithChildren) => (
  <RecoilRoot>
    <UrqlProvider value={datasource}>
      <MantineProvider>
        {children}
        <Toaster />
      </MantineProvider>
    </UrqlProvider>
  </RecoilRoot>
);

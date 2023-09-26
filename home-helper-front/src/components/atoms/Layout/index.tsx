"use client";

import { AppShell as McAppShell, Header, MantineTheme } from "@mantine/core";
import { ReactElement, ReactNode } from "react";

type LayoutProps = {
  header?: ReactElement | ReactNode;
  children: ReactElement | ReactNode;
  headerHidden?: boolean;
  nav: ReactElement;
};
export const index = ({
  header = <></>,
  children,
  headerHidden = false,
  nav,
}: LayoutProps) => {
  const headerHeight = headerHidden ? 0 : 50;
  const headerDisplay = headerHidden ? "none" : "display";

  const styles = (theme: MantineTheme) => ({
    main: {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[8]
          : theme.colors.gray[0],
    },
  });

  const paramHeader = (
    <Header height={headerHeight} p="xs" display={headerDisplay}>
      {header}
    </Header>
  );

  return (
    <McAppShell padding={2} navbar={nav} header={paramHeader} styles={styles}>
      {children}
    </McAppShell>
  );
};

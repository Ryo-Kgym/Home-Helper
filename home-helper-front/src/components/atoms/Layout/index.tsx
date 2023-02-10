import { AppShell as McAppShell, Header } from "@mantine/core";
import { FC, ReactElement } from "react";
import { Html } from "@components/atoms/Layout/Html";
import { Navi } from "@components/atoms/Navi";

type LayoutProps = {
  header?: ReactElement;
  navbar?: ReactElement;
  children: ReactElement;
  headerHidden?: boolean;
  navHidden?: boolean;
};
export const index: FC<LayoutProps> = ({
  header = <></>,
  navbar = <></>,
  children,
  headerHidden = false,
  navHidden = false,
}) => {
  const headerHeight = headerHidden ? 0 : 60;
  const headerDisplay = headerHidden ? "none" : "display";

  return (
    <McAppShell
      padding="md"
      navbar={<Navi hidden={navHidden}>{navbar}</Navi>}
      header={
        <Header height={headerHeight} p="xs" display={headerDisplay}>
          {header}
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <Html>{children}</Html>
    </McAppShell>
  );
};

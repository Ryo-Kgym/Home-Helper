import { AppShell as McAppShell, Header } from "@mantine/core";
import { FC, ReactElement } from "react";
import { Layout } from "@components/ui/Layout/Layout";
import { Navi } from "@components/ui/Navi";

type LayoutProps = {
  header?: ReactElement;
  navbar?: ReactElement;
  body: ReactElement;
  headerHidden?: boolean;
  navHidden?: boolean;
};
export const index: FC<LayoutProps> = ({
  header = <></>,
  navbar = <></>,
  body,
  headerHidden = false,
  navHidden = false,
}) => {
  const headerHeight = headerHidden ? 0 : 60;
  const headerDisplay = headerHidden ? "none" : "display";

  return (
    <McAppShell
      padding="md"
      navbar={<Navi body={navbar} hidden={navHidden} />}
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
      <Layout main={body} />
    </McAppShell>
  );
};

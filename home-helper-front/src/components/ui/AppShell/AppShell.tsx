import { AppShell as McAppShell, Header, Navbar } from "@mantine/core";
import { FC, ReactElement } from "react";
import { LinkList } from "@components/ui/Card";
import { Layout } from "@components/presenter/Layout";

type LayoutProps = {
  header?: ReactElement;
  navbar?: ReactElement;
  body: ReactElement;
  navHidden?: boolean;
};
export const index: FC<LayoutProps> = ({
  header = <></>,
  navbar = <LinkList props={cardListProps} />,
  body,
  navHidden = false,
}) => {
  const navDisplay = navHidden ? "none" : "display";
  const navWidth = navHidden ? 0 : 300;

  return (
    <McAppShell
      padding="md"
      navbar={
        <Navbar
          width={{ base: navWidth }}
          height={500}
          p="xs"
          display={navDisplay}
        >
          {navbar}
        </Navbar>
      }
      header={
        <Header height={60} p="xs">
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

const cardListProps = [
  { href: "/homeHelper/possessionPoint", label: "ホーム" },
  { href: "/homeHelper/chargePoint", label: "ふやす" },
  { href: "/homeHelper/exchangePoint", label: "つかう" },
  { href: "/homeHelper/pointHistory", label: "履歴" },
  { href: "/homeHelper", label: "戻る", back: true },
];

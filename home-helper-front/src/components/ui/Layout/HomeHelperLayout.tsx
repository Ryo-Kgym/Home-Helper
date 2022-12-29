import { FC, ReactElement } from "react";
import { index as AppShell } from "./";
import { LinkList } from "@components/ui/Card/LinkList";

type HomeHelperLayoutProps = {
  body: ReactElement;
  navHidden?: boolean;
};
export const HomeHelperLayout: FC<HomeHelperLayoutProps> = ({
  body,
  navHidden,
}) => {
  const header = <h1 className={"font-bold"}>お手伝いアプリ</h1>;
  const navbar = <LinkList props={cardListProps} />;

  return (
    <AppShell
      navbar={navbar}
      header={header}
      body={body}
      navHidden={navHidden}
    />
  );
};

const cardListProps = [
  { href: "/homeHelper/possessionPoint", label: "ホーム" },
  { href: "/homeHelper/chargePoint", label: "ふやす" },
  { href: "/homeHelper/exchangePoint", label: "つかう" },
  { href: "/homeHelper/pointHistory", label: "履歴" },
  { href: "/homeHelper", label: "戻る", back: true },
];

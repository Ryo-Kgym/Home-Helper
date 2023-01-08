import { FC, ReactElement } from "react";
import { index as AppShell } from "./";
import { LinkList } from "@components/ui/Card";

type HomeHelperLayoutProps = {
  children: ReactElement;
  navHidden?: boolean;
};
export const HomeHelperLayout: FC<HomeHelperLayoutProps> = ({
  children,
  navHidden,
}) => {
  const header = <h1 className={"font-bold"}>お手伝いアプリ</h1>;
  const navbar = <LinkList props={linkListProps} />;

  return (
    <AppShell navbar={navbar} header={header} navHidden={navHidden}>
      {children}
    </AppShell>
  );
};

const linkListProps = [
  { href: "/homeHelper/possessionPoint", label: "ホーム" },
  { href: "/homeHelper/chargePoint", label: "ためる" },
  { href: "/homeHelper/exchangePoint", label: "つかう" },
  { href: "/homeHelper/pointHistory", label: "履歴" },
  { href: "/homeHelper", label: "戻る", back: true },
];

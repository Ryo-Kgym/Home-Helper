import { FC, ReactElement, useEffect, useState } from "react";
import { index as AppShell } from "./";
import { LinkList } from "@components/atoms/Card";
import { useUser } from "@hooks/user/useUser";

type HouseHoldLayoutProps = {
  children: ReactElement;
  navHidden?: boolean;
};
export const HouseHoldLayout: FC<HouseHoldLayoutProps> = ({
  children,
  navHidden,
}) => {
  const { userName } = useUser();
  const [displayName, setDisplayName] = useState<string>("");

  const header = (
    <div className={"grid grid-cols-2"}>
      <h1 className={"font-bold"}>家計簿アプリ</h1>
      <h2 className={"m-2 text-right"}>ログイン：{displayName}</h2>
    </div>
  );
  const navbar = <LinkList props={cardListProps} />;

  useEffect(() => {
    setDisplayName(userName);
  }, [userName]);

  return (
    <AppShell navbar={navbar} header={header} navHidden={navHidden}>
      {children}
    </AppShell>
  );
};

const cardListProps = [
  { href: "/household", label: "戻る", back: true },
  { href: "/household/daily", label: "DAILY" },
  { href: "/household/creditCard", label: "CREDIT CARD" },
  { href: "/household/account", label: "ACCOUNT" },
  { href: "/household/genre", label: "GENRE" },
  { href: "/household/category", label: "CATEGORY" },
  { href: "/household/fileImport", label: "FILE" },
  { href: "/household/summary", label: "SUMMARY" },
  { href: "/household/master", label: "MASTER" },
];

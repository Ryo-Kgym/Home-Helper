import { FC, ReactElement } from "react";
import { index as AppShell } from "./";
import { LinkList } from "@components/atoms/Card";

type HouseHoldLayoutProps = {
  children: ReactElement;
  navHidden?: boolean;
};
export const HouseHoldLayout: FC<HouseHoldLayoutProps> = ({
  children,
  navHidden,
}) => {
  const header = <h1 className={"font-bold"}>家計簿アプリ</h1>;
  const navbar = <LinkList props={cardListProps} />;

  return (
    <AppShell navbar={navbar} header={header} navHidden={navHidden}>
      {children}
    </AppShell>
  );
};

const cardListProps = [{ href: "/household", label: "戻る", back: true }];

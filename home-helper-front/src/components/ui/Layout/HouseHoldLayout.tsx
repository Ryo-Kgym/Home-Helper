import { FC, ReactElement } from "react";
import { index as AppShell } from "./";
import { LinkList } from "@components/ui/Card/LinkList";

type HouseHoldLayoutProps = {
  body: ReactElement;
  navHidden?: boolean;
};
export const HouseHoldLayout: FC<HouseHoldLayoutProps> = ({
  body,
  navHidden,
}) => {
  const header = <h1 className={"font-bold"}>家計簿アプリ</h1>;
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

const cardListProps = [{ href: "/houseHold", label: "戻る", back: true }];

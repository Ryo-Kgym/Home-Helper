import { FC } from "react";
import { LinkList } from "@components/ui/Card";

export const HouseHoldPresenter: FC = () => {
  const cardLinkProps = [
    {
      href: "/",
      label: "戻る",
      back: true,
    },
  ];

  return <LinkList props={cardLinkProps} />;
};

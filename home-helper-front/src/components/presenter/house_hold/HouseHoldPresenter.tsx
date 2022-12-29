import { FC } from "react";
import { NonHeaderLayout } from "@components/ui/Layout/Layout";
import { MainTitle } from "@components/ui/MainTitle";
import { LinkList } from "@components/ui/Card";

export const HouseHoldPresenter: FC = () => {
  const cardLinkProps = [
    {
      href: "/",
      label: "戻る",
      back: true,
    },
  ];

  return (
    <NonHeaderLayout
      main={
        <>
          <LinkList props={cardLinkProps} />
        </>
      }
    />
  );
};

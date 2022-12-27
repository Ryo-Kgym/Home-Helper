import { FC } from "react";
import { NonHeaderLayout } from "@components/presenter/Layout";
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
          <MainTitle label={"家計簿アプリ"} />
          <LinkList props={cardLinkProps} />
        </>
      }
    />
  );
};

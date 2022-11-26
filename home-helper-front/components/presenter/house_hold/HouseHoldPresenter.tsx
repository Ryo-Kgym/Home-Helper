import { FC } from "react";
import { NonHeaderLayout } from "../Layout";
import MainTitle from "../../ui/MainTitle";
import { CardLinkList } from "../../ui/Card";

export const HouseHoldPresenter: FC = () => {
  const pageList = [
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
          <CardLinkList pageList={pageList} />
        </>
      }
    />
  );
};

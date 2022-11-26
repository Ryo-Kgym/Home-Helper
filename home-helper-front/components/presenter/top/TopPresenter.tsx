import { FC } from "react";
import { NonHeaderLayout } from "../Layout";
import MainTitle from "../../ui/MainTitle";
import { CardLinkList } from "../../ui/Card";

const cardLindProps = [
  { href: "/homeHelper", label: "お手伝いアプリ" },
  { href: "/household", label: "家計簿アプリ" },
];

export const TopPresenter: FC = () => {
  return (
    <NonHeaderLayout
      main={
        <>
          <MainTitle label={"うちのアプリへようこそ！"} />
          <CardLinkList props={cardLindProps} />
        </>
      }
    />
  );
};

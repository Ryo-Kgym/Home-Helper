import { FC } from "react";
import { NonHeaderLayout } from "@components/presenter/Layout";
import { MainTitle } from "@components/ui/MainTitle";
import { LinkList } from "@components/ui/Card";

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
          <LinkList props={cardLindProps} />
        </>
      }
    />
  );
};

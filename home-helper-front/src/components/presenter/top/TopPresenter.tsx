import { FC } from "react";
import { MainTitle } from "@components/ui/MainTitle";
import { LinkList } from "@components/ui/Card";

const linkListProps = [
  { href: "/homeHelper", label: "お手伝いアプリ" },
  { href: "/household", label: "家計簿アプリ" },
];

export const TopPresenter: FC = () => {
  return (
    <>
      <MainTitle label={"うちのアプリへようこそ！"} />
      <LinkList props={linkListProps} />
    </>
  );
};

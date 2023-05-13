import { FC } from "react";
import { MainTitle } from "@components/atoms/MainTitle";
import { LinkList } from "@components/atoms/Card";
import { signOut } from "next-auth/react";

const linkListProps = [
  { href: "#", label: "ログアウト", back: true, handleClick: signOut },
  { href: "/household", label: "家計簿アプリ" },
];

export const TopPresenter: FC = () => {
  return (
    <>
      <MainTitle label={"Select App!"} />
      <LinkList props={linkListProps} />
    </>
  );
};

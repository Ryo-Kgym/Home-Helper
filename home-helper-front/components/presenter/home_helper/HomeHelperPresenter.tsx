import { FC } from "react";
import MainTitle from "../../ui/MainTitle";
import { CardLinkList } from "../../ui/Card";
import { NonHeaderLayout } from "../Layout";

type HomeHelperPresenterProps = {
  userList: any[];
};

export const HomeHelperPresenter: FC<HomeHelperPresenterProps> = (props) => {
  const pageList = [
    {
      href: "/",
      label: "戻る",
      back: true,
    },
  ];
  props.userList.map((user) => {
    pageList.push({
      href: "/homeHelper/" + user.id,
      label: user.name,
      back: false,
    });
  });

  return (
    <NonHeaderLayout
      main={
        <>
          <MainTitle label={"お手伝いアプリ"} />
          <CardLinkList pageList={pageList} />
        </>
      }
    />
  );
};

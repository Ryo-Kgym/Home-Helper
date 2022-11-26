import { FC } from "react";
import MainTitle from "../../ui/MainTitle";
import { CardLinkList, CardProps } from "../../ui/Card";
import { NonHeaderLayout } from "../Layout";

type HomeHelperPresenterProps = {
  userList: any[];
  handleClickUser: (userId: string) => void;
};

export const HomeHelperPresenter: FC<HomeHelperPresenterProps> = (props) => {
  const propList: CardProps[] = [
    {
      href: "/",
      label: "戻る",
      back: true,
    },
  ];
  props.userList.map((user) => {
    return propList.push({
      href: "/homeHelper/" + user.id,
      label: user.name,
      back: false,
      handleClick: () => {
        props.handleClickUser(user.id);
      },
    });
  });

  return (
    <NonHeaderLayout
      main={
        <>
          <MainTitle label={"お手伝いアプリ"} />
          <CardLinkList props={propList} />
        </>
      }
    />
  );
};

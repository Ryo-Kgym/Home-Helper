import { FC } from "react";
import { MainTitle } from "@components/ui/MainTitle";
import { CardProps, LinkList } from "@components/ui/Card";

type HomeHelperPresenterProps = {
  userList: any[];
  handleClickUser: (userId: string) => void;
};

export const HomeHelperPresenter: FC<HomeHelperPresenterProps> = (props) => {
  const propList: CardProps[] = [];
  props.userList.map((user) => {
    return propList.push({
      href: "/homeHelper/possessionPoint",
      label: user.name,
      back: false,
      handleClick: () => {
        props.handleClickUser(user.id);
      },
    });
  });

  return (
    <>
      <MainTitle label={"お手伝いアプリ"} />
      <LinkList props={propList} />
    </>
  );
};

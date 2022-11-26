import { FC } from "react";
import { MainTitle } from "@components/ui/MainTitle";
import { CardLinkList, CardProps } from "@components/ui/Card";
import { NonHeaderLayout } from "@components/presenter/Layout";

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

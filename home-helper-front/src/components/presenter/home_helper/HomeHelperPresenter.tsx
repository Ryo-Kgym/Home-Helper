import { FC } from "react";
import { CardProps, LinkList } from "@components/ui/Card";

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
      <LinkList props={propList} />
    </>
  );
};

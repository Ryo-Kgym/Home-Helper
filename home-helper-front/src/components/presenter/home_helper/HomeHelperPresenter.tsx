import { FC } from "react";
import { LinkList, LinkProps } from "@components/ui/Card";

type HomeHelperPresenterProps = {
  userList: any[];
  handleClickUser: (userId: string) => void;
};

export const HomeHelperPresenter: FC<HomeHelperPresenterProps> = (props) => {
  const propList: LinkProps[] = [
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

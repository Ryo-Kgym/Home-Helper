import { FC } from "react";
import { LinkList, LinkProps } from "@components/atoms/Card";

type HomeHelperPresenterProps = {
  userList: any[];
  handleClickUser: (userId: string) => void;
};

export const HouseHoldPresenter: FC<HomeHelperPresenterProps> = ({
  userList,
  handleClickUser,
}) => {
  const propList: LinkProps[] = [
    {
      href: "/",
      label: "戻る",
      back: true,
    },
  ];
  userList.map((user) => {
    return propList.push({
      href: "/household/account",
      label: user.name,
      back: false,
      handleClick: () => {
        handleClickUser(user.id);
      },
    });
  });

  return <LinkList props={propList} />;
};

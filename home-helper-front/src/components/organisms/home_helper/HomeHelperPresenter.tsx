import { LinkList, LinkProps } from "@components/atoms/Card";

type HomeHelperPresenterProps = {
  userList: any[];
  handleClickUser: (_: string) => void;
};

export const HomeHelperPresenter = ({
  userList,
  handleClickUser,
}: HomeHelperPresenterProps) => {
  const propList: LinkProps[] = [
    {
      href: "/",
      label: "戻る",
      back: true,
    },
  ];
  userList.map((user) => {
    return propList.push({
      href: "/homeHelper/possessionPoint",
      label: user.name,
      back: false,
      handleClick: () => {
        handleClickUser(user.id);
      },
    });
  });

  return <LinkList props={propList} />;
};

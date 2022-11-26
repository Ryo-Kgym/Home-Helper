import { FC } from "react";
import { HomeHelperPresenter } from "@components/presenter/home_helper/HomeHelperPresenter";

type HomeHelperContainerProps = {
  userList: any[];
};

export const HomeHelperContainer: FC<HomeHelperContainerProps> = (props) => {
  const handleClickUser = (userId: string) => {
    sessionStorage.setItem("userId", userId);
  };

  return (
    <HomeHelperPresenter
      userList={props.userList}
      handleClickUser={handleClickUser}
    />
  );
};

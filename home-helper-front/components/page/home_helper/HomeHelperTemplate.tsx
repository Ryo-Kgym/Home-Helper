import { FC } from "react";
import { HomeHelperContainer } from "@components/container/home_helper/HomeHelperContainer";

type HomeHelperPageProps = {
  data: any;
};

export const Page: FC<HomeHelperPageProps> = (props) => {
  return <HomeHelperContainer userList={props.data.userList} />;
};

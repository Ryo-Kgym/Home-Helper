import { FC } from "react";
import { RegisterDailyDetailPresenter } from "@components/organisms/register_daily_detail/RegisterDailyDetailPresenter";

type RegisterDailyDetailContainerProps = {};
export const RegisterDailyDetailContainer: FC<
  RegisterDailyDetailContainerProps
> = () => {
  return <RegisterDailyDetailPresenter />;
};

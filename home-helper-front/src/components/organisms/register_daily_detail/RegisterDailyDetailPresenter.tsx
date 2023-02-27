import { FC } from "react";

type RegisterDailyDetailPresenterProps = {};
export const RegisterDailyDetailPresenter: FC<
  RegisterDailyDetailPresenterProps
> = () => (
  <div className={"grid grid-cols-2 w-full"}>
    <div>日付変更</div>
    <div>区分</div>
    <div>コンポーネント</div>
    <div>ジャンル</div>
    <div>コンポーネント</div>
    <div>カテゴリ</div>
    <div>コンポーネント</div>
    <div>アカウント</div>
    <div>コンポーネント</div>
    <div>金額</div>
    <div>コンポーネント</div>
    <div>メモ</div>
    <div>コンポーネント</div>
  </div>
);

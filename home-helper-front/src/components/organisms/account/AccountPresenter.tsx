import { FC } from "react";
import { Table, TbodyProps } from "@components/atoms/Table";

type AccountPresenterProps = {
  tbodyProps: TbodyProps[];
};
export const AccountPresenter: FC<AccountPresenterProps> = ({ tbodyProps }) => {
  return (
    <>
      <Table header={["アカウント", "残高"]} tbodyPropsArray={tbodyProps} />
    </>
  );
};

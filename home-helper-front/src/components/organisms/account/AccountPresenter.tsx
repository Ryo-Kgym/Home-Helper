import { FC } from "react";
import { Table, TableProps } from "@components/atoms/Table";

type AccountPresenterProps = {
  tableProps: TableProps[];
};
export const AccountPresenter: FC<AccountPresenterProps> = ({ tableProps }) => {
  return (
    <>
      <Table
        header={["アカウント", "残高"]}
        tablePropsList={tableProps}
        size={"sm"}
      />
    </>
  );
};

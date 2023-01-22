import { ReactElement } from "react";

export const HelpItemRegisterPresenter = () => <InputTable />;

const InputTable = () => (
  <div className={"grid grid-cols-5 text-4xl"}>
    <Title>項目名</Title>
    <Item></Item>
    <Title>ポイント</Title>
    <Item></Item>
    <Title>メモ</Title>
    <Item></Item>
  </div>
);

const Title = ({ children }: { children: string }) => (
  <div className={"col-span-1 p-8 border-b-2 border-r-2"}>{children}</div>
);

const Item = ({ children }: { children: ReactElement }) => (
  <div className={"col-span-4 p-8 border-b-2"}>{children}</div>
);

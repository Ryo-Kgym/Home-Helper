import { FC, ReactElement } from "react";
import { Input } from "@components/atoms/Input";
import { InputValidationMessage } from "@components/atoms/Input/InputValidator";
import { Button } from "@components/atoms/Button";

type HelpItemRegisterPresenterProps = {
  itemName: string;
  setItemName: (value: string) => void;
  point: number;
  setPoint: (value: number) => void;
  memo: string;
  setMemo: (value: string) => void;
  registerOnClick: () => void;
};
export const HelpItemRegisterPresenter: FC<HelpItemRegisterPresenterProps> = ({
  itemName,
  setItemName,
  point,
  setPoint,
  memo,
  setMemo,
  registerOnClick,
}) => (
  <div className={"text-4xl"}>
    <ItemNameItem value={itemName} setValue={setItemName} />
    <PointItem value={point} setValue={setPoint} />
    <MemoItem value={memo} setValue={setMemo} />
    <div className={"grid place-content-center"}>
      <Button label={"登録"} onClick={registerOnClick} />
    </div>
  </div>
);

const ItemNameItem = ({ value, setValue }: ItemProps) => (
  <ItemStyler>
    <Input
      label={"項目名"}
      value={value}
      onChange={setValue}
      validator={{
        result: String(value).length < 1,
        message: InputValidationMessage.EMPTY,
      }}
    />
  </ItemStyler>
);

const PointItem = ({ value, setValue }: ItemProps) => (
  <ItemStyler>
    <Input
      label={"ポイント"}
      type={"number"}
      value={value}
      onChange={setValue}
      validator={{
        result: value < 1,
        message: "0より大きい値を入力してね。",
      }}
    />
  </ItemStyler>
);

const MemoItem = ({ value, setValue }: ItemProps) => (
  <ItemStyler>
    <Input
      label={"メモ"}
      value={value}
      onChange={setValue}
      placeholder={"自由入力です。"}
    />
  </ItemStyler>
);

type ItemProps = {
  value: string | number;
  setValue: (value: any) => void;
};

const ItemStyler = ({
  children,
}: {
  children: ReactElement | ReactElement[];
}) => <div className={"px-8 py-8 border-b-2"}>{children}</div>;

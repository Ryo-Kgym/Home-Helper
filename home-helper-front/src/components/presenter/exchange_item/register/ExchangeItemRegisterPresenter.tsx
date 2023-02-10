import { FC, ReactElement } from "react";
import { Input } from "@components/ui/Input";
import { InputValidationMessage } from "@components/ui/Input/InputValidator";
import { Button } from "@components/ui/Button";

type ExchangeItemRegisterPresenterProps = {
  itemName: string;
  setItemName: (value: string) => void;
  point: number;
  setPoint: (value: number) => void;
  registerOnClick: () => void;
};
export const ExchangeItemRegisterPresenter: FC<
  ExchangeItemRegisterPresenterProps
> = ({ itemName, setItemName, point, setPoint, registerOnClick }) => (
  <div className={"text-4xl"}>
    <ItemNameItem value={itemName} setValue={setItemName} />
    <PointItem value={point} setValue={setPoint} />
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
type ItemProps = {
  value: string | number;
  setValue: (value: any) => void;
};

const ItemStyler = ({
  children,
}: {
  children: ReactElement | ReactElement[];
}) => <div className={"px-8 py-8 border-b-2"}>{children}</div>;

import { FC } from "react";
import { Segment } from "@components/atoms/Segment";
import { IocomeType } from "@domain/model/household/IocomeType";

type IocomeTypeSegmentPresenterProps = {
  value: string;
  onChange: (value: string) => void;
  disabled: boolean;
};

export const IocomeTypeSegmentPresenter: FC<
  IocomeTypeSegmentPresenterProps
> = ({ value, onChange, disabled }) => (
  <Segment value={value} onChange={onChange} data={data} disabled={disabled} />
);

const data = [
  { value: IocomeType.Income, label: "収入" },
  { value: IocomeType.Outcome, label: "支出" },
];

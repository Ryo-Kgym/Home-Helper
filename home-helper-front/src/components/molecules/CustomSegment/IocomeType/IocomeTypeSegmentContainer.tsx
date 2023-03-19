import { IocomeType } from "@domain/model/household/IocomeType";
import { FC } from "react";
import { IocomeTypeSegmentPresenter } from "@components/molecules/CustomSegment/IocomeType/IocomeTypeSegmentPresenter";

type IocomeTypeSegmentContainerProps = {
  iocomeType: IocomeType;
  setIocomeType: (value: IocomeType) => void;
  disabled?: boolean;
};
export const IocomeTypeSegmentContainer: FC<
  IocomeTypeSegmentContainerProps
> = ({ iocomeType, setIocomeType, disabled = false }) => {
  const onChange = (value: string) => {
    setIocomeType(value as unknown as IocomeType);
  };

  return (
    <IocomeTypeSegmentPresenter
      value={iocomeType}
      onChange={onChange}
      disabled={disabled}
    />
  );
};

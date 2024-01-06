import { FormatPricePresenter } from "@components/molecules/FormatPrice/FormatPricePresenter";
import { IocomeType } from "@domain/model/household/IocomeType";
import { FC } from "react";

type FormatPriceContainerProps = {
  iocomeType: IocomeType;
  price: number;
};
export const FormatPriceContainer: FC<FormatPriceContainerProps> = ({
  iocomeType,
  price,
}) => {
  const priceWithComma = Number(price).toLocaleString();

  const className =
    iocomeType === IocomeType.Income ? "text-green-600" : "text-red-400";
  const priceStr =
    iocomeType === IocomeType.Income
      ? priceWithComma
      : "(" + priceWithComma + ")";

  return <FormatPricePresenter className={className} priceStr={priceStr} />;
};

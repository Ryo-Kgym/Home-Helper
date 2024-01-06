import { FC } from "react";

type FormatPricePresenterProps = {
  className: string;
  priceStr: string;
};
export const FormatPricePresenter: FC<FormatPricePresenterProps> = ({
  className,
  priceStr,
}) => {
  return <div className={className}>{priceStr}</div>;
};

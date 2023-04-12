import { FC } from "react";
import { LinkList, LinkProps } from "@components/atoms/Card";
import { User } from "@domain/model/household/User";

type HomeHelperPresenterProps = {
  linkProps: LinkProps[];
};

export const HouseHoldPresenter: FC<HomeHelperPresenterProps> = ({
  linkProps,
}) => <LinkList props={linkProps} />;

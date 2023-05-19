import { LinkList, LinkProps } from "@components/atoms/Card";
import { FC } from "react";
import { MainTitle } from "@components/atoms/MainTitle";

type SelectGroupPresenterProps = {
  linkProps: LinkProps[];
};

export const SelectGroupPresenter: FC<SelectGroupPresenterProps> = ({
  linkProps,
}) => (
  <div>
    <MainTitle label={"Select Group"} />
    <LinkList props={linkProps} />
  </div>
);

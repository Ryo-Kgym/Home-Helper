/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { LinkList, LinkProps } from "@components/atoms/Card/index";

type SelectGroupPresenterProps = {
  linkProps: LinkProps[];
};

export const SelectGroupPresenter = ({
  linkProps,
}: SelectGroupPresenterProps) => (
  <div className={"grid w-1/2 mx-auto"}>
    <div className={"text-2xl m-10"}>グループを選択してください</div>
    <LinkList props={linkProps} />
  </div>
);

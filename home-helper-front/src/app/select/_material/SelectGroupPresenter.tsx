/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { LinkList, LinkProps } from "@components/atoms/Card/index";
import { LoginStatus } from "@components/molecules/LoginStatus/index";

type SelectGroupPresenterProps = {
  linkProps: LinkProps[];
};

export const SelectGroupPresenter = ({
  linkProps,
}: SelectGroupPresenterProps) => (
  <div>
    <LoginStatus />
    <LinkList props={linkProps} />
  </div>
);

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
  <div>
    <LinkList props={linkProps} />
  </div>
);

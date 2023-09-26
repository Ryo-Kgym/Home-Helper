/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { LinkProps } from "@components/atoms/Card/index";
import { LinkPresenter } from "@components/atoms/Card/LinkPresenter";

export const LinkContainer = ({
  back,
  label,
  href,
  handleClick,
}: LinkProps) => {
  const text = back ? <h2>&larr; {label}</h2> : <h2> {label} </h2>;

  return <LinkPresenter text={text} href={href} handleClick={handleClick} />;
};

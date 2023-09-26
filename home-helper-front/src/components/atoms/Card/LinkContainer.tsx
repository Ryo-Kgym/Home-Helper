import { FC } from "react";
import { LinkPresenter } from "@components/atoms/Card/LinkPresenter";
import { LinkProps } from "@components/atoms/Card/index";

export const LinkContainer: FC<LinkProps> = ({
  back,
  label,
  href,
  handleClick,
}) => {
  const text = back ? <h2>&larr; {label}</h2> : <h2> {label} </h2>;

  return <LinkPresenter text={text} href={href} handleClick={handleClick} />;
};

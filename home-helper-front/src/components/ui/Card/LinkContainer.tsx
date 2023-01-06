import { FC } from "react";
import { LinkPresenter } from "@components/ui/Card/LinkPresenter";
import { LinkProps } from "@components/ui/Card/index";

export const LinkContainer: FC<LinkProps> = ({
  back,
  label,
  href,
  handleClick,
}) => {
  const text = back ? <h2>&larr; {label}</h2> : <h2> {label} &rarr;</h2>;

  return <LinkPresenter text={text} href={href} handleClick={handleClick} />;
};

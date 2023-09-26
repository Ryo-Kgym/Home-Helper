import Link from "next/link";
import { FC, ReactElement } from "react";

type CardProps = {
  text: ReactElement;
  href: string;
  handleClick?: () => void;
};

export const LinkPresenter: FC<CardProps> = ({ text, href, handleClick }) => {
  return (
    <Link
      href={href}
      className={"border-b-2 hover:border-b-4 py-2 pl-2 w-full text-sm"}
      onClick={handleClick}
    >
      {text}
    </Link>
  );
};

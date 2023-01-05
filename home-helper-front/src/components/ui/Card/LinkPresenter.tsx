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
      className={"border-b-2 hover:border-b-4 py-5 px-5 w-full text-2xl"}
      onClick={handleClick}
    >
      {text}
    </Link>
  );
};

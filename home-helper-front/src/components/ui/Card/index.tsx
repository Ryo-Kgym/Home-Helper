import Link from "next/link";
import { FC } from "react";

export type CardProps = {
  href: string;
  label: string;
  back?: boolean;
  handleClick?: () => void;
};

export const index: FC<CardProps> = ({ back, label, href, handleClick }) => {
  const text = back ? <h2>&larr; {label}</h2> : <h2> {label} &rarr;</h2>;

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

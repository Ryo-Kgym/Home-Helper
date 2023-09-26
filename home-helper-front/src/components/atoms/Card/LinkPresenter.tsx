/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import Link from "next/link";
import { ReactElement } from "react";

type CardProps = {
  text: ReactElement;
  href: string;
  handleClick?: () => void;
};

export const LinkPresenter = ({ text, href, handleClick }: CardProps) => (
  <div
    className={
      "border-2 rounded-2xl border-gray-300 hover:border-red-500 p-[2em]"
    }
  >
    <Link href={href} className={"text-2xl"} onClick={handleClick}>
      {text}
    </Link>
  </div>
);

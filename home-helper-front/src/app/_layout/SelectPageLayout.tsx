/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { PropsWithChildren } from "react";

export const SelectPageLayout = ({
  title,
  children,
}: PropsWithChildren<{
  title: string;
}>) => (
  <div className={"grid md:w-1/2 mx-auto w-[90%]"}>
    <div className={"text-2xl m-10"}>{title}</div>
    {children}
  </div>
);

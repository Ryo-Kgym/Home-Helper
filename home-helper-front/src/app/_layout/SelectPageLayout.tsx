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
  <div>
    <div className={"grid w-1/2 mx-auto"}>
      <div className={"text-2xl m-10"}>{title}</div>
      {children}
    </div>
  </div>
);

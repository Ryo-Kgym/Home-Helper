/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { PropsWithChildren } from "react";
import { LoginStatus } from "@components/molecules/LoginStatus/index";

export const SelectPageLayout = ({
  title,
  children,
}: PropsWithChildren<{
  title: string;
}>) => (
  <div>
    <LoginStatus />
    <div className={"grid w-1/2 mx-auto"}>
      <div className={"text-2xl m-10"}>{title}</div>
      {children}
    </div>
  </div>
);

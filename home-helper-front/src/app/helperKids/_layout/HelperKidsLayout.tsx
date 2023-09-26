/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { ReactNode } from "react";
import { index as AppShell } from "@components/atoms/Layout";
import { HelperKidsMenu } from "./HelperKidsMenu";

type HelperKidsLayoutProps = {
  children: ReactNode;
  navHidden?: boolean;
};
export const HelperKidsLayout = ({
  children,
  navHidden,
}: HelperKidsLayoutProps) => {
  const header = <div className={"font-bold text-2xl"}>お手伝いアプリ</div>;

  const nav = (
    <div className={"max-sm:hidden mt-12"}>
      <HelperKidsMenu hidden={navHidden} />
    </div>
  );

  return (
    <AppShell header={header} nav={nav}>
      <div className={"flex flex-col items-center justify-center min-h-full"}>
        {children}
      </div>
    </AppShell>
  );
};

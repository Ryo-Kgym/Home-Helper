/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { ReactNode } from "react";
import { HelperPointCountUp } from "./_helperPointCountUp";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className={"w-full"}>
        <div className={"z-[100] absolute right-5 top-5"}>
          <div
            className={
              "border-double border-8 border-black rounded-full " +
              "text-right text-4xl w-60 p-5"
            }
          >
            <HelperPointCountUp />
          </div>
        </div>
      </div>
      <>{children}</>
    </>
  );
};

export default Layout;

/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { Split } from "@components/atoms/Split/index";
import { ReactElement, ReactNode } from "react";
import { MobileTabs } from "@components/ui";

export const ResponsiveSwitcher = ({
  first,
  second,
}: {
  first: ReactElement | ReactNode;
  second: ReactElement | ReactNode;
}) => (
  <div>
    <div className={"max-sm:hidden"}>
      <Split size={50} first={first} second={second} />
    </div>
    <div className={"sm:hidden"}>
      <MobileTabs
        defaultSelect={"first"}
        tabPropsList={[
          { value: "first", label: "Main", contents: first },
          { value: "second", label: "Sub", contents: second },
        ]}
      />
    </div>
  </div>
);

/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { Split } from "@components/atoms/Split/index";
import { ReactElement, ReactNode } from "react";
import { Tab } from "@components/atoms/Tab/index";

type Props = {
  first: ReactElement | ReactNode;
  second: ReactElement | ReactNode;
};
export const ResponsiveSwitcher = ({ first, second }: Props) => {
  return (
    <div>
      <div className={"max-sm:hidden"}>
        <Split size={50} first={first} second={second} />
      </div>
      <div className={"sm:hidden"}>
        <Tab
          defaultSelect={"first"}
          tabPropsList={[
            { value: "first", label: "選択", contents: first },
            { value: "second", label: "明細", contents: second },
          ]}
        />
      </div>
    </div>
  );
};

/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { Split } from "@components/atoms/Split/index";
import { ReactElement, ReactNode } from "react";
import { MobileTabs } from "@components/ui";

export const ResponsiveSwitcher = ({
  first: firstContents,
  second: originalSecond,
}: {
  first: ReactElement | ReactNode;
  second: ReactElement | ReactNode;
}) => {
  const First = () => <div className={"p-1 w-full"}>{firstContents}</div>;
  const Second = () => <div className={"p-1 w-full"}>{originalSecond}</div>;

  return (
    <div>
      <div className={"max-sm:hidden"}>
        <Split size={50} first={<First />} second={<Second />} />
      </div>
      <div className={"sm:hidden"}>
        <MobileTabs
          defaultSelect={"first"}
          tabPropsList={[
            { value: "first", label: "Main", contents: <First /> },
            { value: "second", label: "Sub", contents: <Second /> },
          ]}
        />
      </div>
    </div>
  );
};

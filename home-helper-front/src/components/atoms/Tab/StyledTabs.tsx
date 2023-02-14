import { Tabs, TabsProps } from "@mantine/core";
import { FC } from "react";

export const StyledTabs: FC<TabsProps> = (props) => {
  return (
    <Tabs
      styles={(theme) => ({
        tab: {
          ...theme.fn.focusStyles(),
          fontSize: theme.fontSizes.xl,
        },
      })}
      {...props}
    />
  );
};

import { FC } from "react";
import { SegmentedControl } from "@mantine/core";
import { MantineSize } from "@mantine/styles";

type SegmentPresenterProps = {
  value: string;
  onChange: (value: string) => void;
  data: SegmentData[];
  size?: MantineSize;
};
export const SegmentPresenter: FC<SegmentPresenterProps> = ({
  value,
  onChange,
  data,
  size = "md",
}) => {
  return (
    <SegmentedControl
      color="lime"
      fullWidth
      size={size}
      radius={"xl"}
      value={value}
      onChange={onChange}
      data={data}
    />
  );
};

type SegmentData = {
  value: string;
  label: string;
};

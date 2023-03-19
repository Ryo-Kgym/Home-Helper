import { FC } from "react";
import { SegmentedControl } from "@mantine/core";
import { MantineSize } from "@mantine/styles";

type SegmentPresenterProps = {
  value: string;
  onChange: (value: string) => void;
  data: SegmentData[];
  size?: MantineSize;
  disabled?: boolean;
};
export const SegmentPresenter: FC<SegmentPresenterProps> = ({
  value,
  onChange,
  data,
  size = "md",
  disabled = false,
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
      disabled={disabled}
    />
  );
};

type SegmentData = {
  value: string;
  label: string;
};

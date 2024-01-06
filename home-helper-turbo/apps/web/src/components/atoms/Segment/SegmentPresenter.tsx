import { SegmentedControl } from "@mantine/core";
import { MantineSize } from "@mantine/styles";

type SegmentPresenterProps = {
  value: string;
  onChange: (_: string) => void;
  data: SegmentData[];
  size?: MantineSize;
  disabled?: boolean;
};
export const SegmentPresenter = ({
  value,
  onChange,
  data,
  size = "md",
  disabled = false,
}: SegmentPresenterProps) => (
  <>
    <SegmentedControl
      className={"max-sm:hidden"}
      color="lime"
      fullWidth
      size={size}
      radius={"xl"}
      value={value}
      onChange={onChange}
      data={data}
      disabled={disabled}
    />
    <SegmentedControl
      className={"sm:hidden"}
      color="lime"
      fullWidth
      size={"xs"}
      value={value}
      onChange={onChange}
      data={data}
      disabled={disabled}
    />
  </>
);

type SegmentData = {
  value: string;
  label: string;
};

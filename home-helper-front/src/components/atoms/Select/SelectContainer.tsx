import { SelectData, SelectPresenter } from "./SelectPresenter";
import { MantineSize } from "@mantine/styles";

type SelectContainerProps = {
  label: string;
  value: string | null;
  onChange: (_: string | null) => void;
  data: SelectData[];
  placeholder?: string;
  maxDropdownHeight?: number;
  size?: MantineSize;
  withAsterisk?: boolean;
};

export const SelectContainer = ({
  label,
  value,
  onChange,
  data,
  placeholder = "",
  maxDropdownHeight = 400,
  size = "lg",
  withAsterisk = false,
}: SelectContainerProps) => {
  const valueIsInvalid = value === null || value?.length === 0;

  const error = withAsterisk && valueIsInvalid ? "Required" : "";

  return (
    <SelectPresenter
      label={label}
      value={value}
      onChange={onChange}
      data={data}
      placeholder={placeholder}
      maxDropdownHeight={maxDropdownHeight}
      size={size}
      withAsterisk={withAsterisk}
      error={error}
    />
  );
};

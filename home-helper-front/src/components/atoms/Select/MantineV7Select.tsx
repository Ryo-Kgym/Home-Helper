/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { MantineSize } from "@mantine/styles";
import { OptionsFilter, ComboboxItem, Select } from "@mantine/core";
import { SelectData } from "../Select";

type MantineSelectProps = {
  label: string;
  value: string | null;
  onChange: (_: string | null) => void;
  data: SelectData[];
  placeholder?: string;
  maxDropdownHeight?: number;
  size?: MantineSize;
  withAsterisk?: boolean;
};

export const MantineV7Select = ({
  label,
  value,
  onChange,
  data,
  placeholder = "",
  maxDropdownHeight = 200,
  size = "lg",
  withAsterisk = false,
}: MantineSelectProps) => {
  const optionsFilter: OptionsFilter = ({ options, search }) => {
    const splittedSearch = search.toLowerCase().trim().split(" ");

    return (options as ComboboxItem[]).filter((option) => {
      const words = option.label.toLowerCase().trim().split(" ");
      return splittedSearch.every((searchWord) =>
        words.some((word) => word.includes(searchWord)),
      );
    });
  };

  const valueIsInvalid = value === null || value?.length === 0;

  const error = withAsterisk && valueIsInvalid ? "Required" : "";

  return (
    <Select
      label={label}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      data={data}
      searchable
      maxDropdownHeight={maxDropdownHeight}
      filter={optionsFilter}
      size={size}
      withAsterisk={withAsterisk}
      error={error}
    />
  );
};

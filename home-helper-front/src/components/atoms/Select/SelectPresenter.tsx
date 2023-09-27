/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { ComponentPropsWithoutRef, forwardRef } from "react";
import {
  Avatar,
  Group,
  Select,
  Text,
  OptionsFilter,
  ComboboxItem,
} from "@mantine/core";
import { MantineSize } from "@mantine/styles";

type SelectPresenterProps = {
  label: string;
  value: string | null;
  onChange: (_: string | null) => void;
  data: SelectData[];
  placeholder: string;
  maxDropdownHeight: number;
  size: MantineSize;
  withAsterisk: boolean;
  error: string;
};
export const SelectPresenter = ({
  label,
  value,
  onChange,
  data,
  placeholder,
  maxDropdownHeight,
  size,
  withAsterisk,
  error,
}: SelectPresenterProps) => {
  const optionsFilter: OptionsFilter = ({ options, search }) => {
    const splittedSearch = search.toLowerCase().trim().split(" ");
    return (options as ComboboxItem[]).filter((option) => {
      const words = option.label.toLowerCase().trim().split(" ");
      return splittedSearch.every((searchWord) =>
        words.some((word) => word.includes(searchWord)),
      );
    });
  };

  return (
    <>
      <Select
        label={label}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        itemComponent={SelectItem}
        // @ts-ignore
        data={data}
        searchable
        maxDropdownHeight={maxDropdownHeight}
        nothingFound="not found..."
        filter={optionsFilter}
        size={size}
        withAsterisk={withAsterisk}
        error={error}
      />
    </>
  );
};

const SelectItem = forwardRef<HTMLDivElement, SelectData>(
  function selectItemFunc(
    { image, label, description, ...others }: SelectData,
    ref,
  ) {
    return (
      <div ref={ref} {...others}>
        <Group>
          {image && <Avatar src={image} />}

          <div>
            <Text size="sm">{label}</Text>
            {description && (
              <Text size="xs" opacity={0.65}>
                {description}
              </Text>
            )}
          </div>
        </Group>
      </div>
    );
  },
);

export interface SelectData extends ComponentPropsWithoutRef<"div"> {
  label: string;
  value: string | number;
  image?: string;
  description?: string;
}

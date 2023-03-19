import { ComponentPropsWithoutRef, FC, forwardRef } from "react";
import { Avatar, Group, Select, SelectItem, Text } from "@mantine/core";
import { MantineSize } from "@mantine/styles";

type SelectPresenterProps = {
  label: string;
  value: string | null;
  onChange: (value: string | null) => void;
  data: SelectData[];
  placeholder: string;
  maxDropdownHeight: number;
  size: MantineSize;
  withAsterisk: boolean;
  error: string;
};
export const SelectPresenter: FC<SelectPresenterProps> = ({
  label,
  value,
  onChange,
  data,
  placeholder,
  maxDropdownHeight,
  size,
  withAsterisk,
  error,
}) => {
  const filter = (value: string, item: SelectItem): boolean => {
    return (
      item?.label?.toLowerCase().includes(value.toLowerCase().trim()) ||
      item.description?.toLowerCase().includes(value.toLowerCase().trim())
    );
  };

  return (
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
      filter={filter}
      size={size}
      withAsterisk={withAsterisk}
      error={error}
    />
  );
};

const SelectItem = forwardRef<HTMLDivElement, SelectData>(
  function selectItemFunc(
    { image, label, description, ...others }: SelectData,
    ref
  ) {
    return (
      <div ref={ref} {...others}>
        <Group noWrap>
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
  }
);

export interface SelectData extends ComponentPropsWithoutRef<"div"> {
  label: string;
  value: string | number;
  image?: string;
  description?: string;
}

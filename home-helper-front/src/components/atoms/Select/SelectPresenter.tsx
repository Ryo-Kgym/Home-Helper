import { ComponentPropsWithoutRef, FC, forwardRef } from "react";
import { Avatar, Group, Select, SelectItem, Text } from "@mantine/core";

type SelectPresenterProps = {
  label: string;
  data: ItemProps[];
  placeholder?: string;
  maxDropdownHeight?: number;
};
export const SelectPresenter: FC<SelectPresenterProps> = ({
  label,
  data,
  placeholder = "",
  maxDropdownHeight = 400,
}) => {
  const filter = (value: string, item: SelectItem): boolean => {
    return (
      item?.label?.toLowerCase().includes(value.toLowerCase().trim()) ||
      item.description.toLowerCase().includes(value.toLowerCase().trim())
    );
  };

  return (
    <Select
      label={label}
      placeholder={placeholder}
      itemComponent={SelectItem}
      // @ts-ignore
      data={data}
      searchable
      maxDropdownHeight={maxDropdownHeight}
      nothingFound="not found..."
      filter={filter}
    />
  );
};

const SelectItem = forwardRef<HTMLDivElement, ItemProps>(
  ({ image, label, description, ...others }: ItemProps, ref) => (
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
  )
);

export interface ItemProps extends ComponentPropsWithoutRef<"div"> {
  label: string;
  value: string | number;
  image?: string;
  description?: string;
}

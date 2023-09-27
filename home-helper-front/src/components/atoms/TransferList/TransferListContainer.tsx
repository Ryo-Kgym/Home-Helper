/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { TransferListPresenter } from "./TransferListPresenter";
import { TransferListItem } from "@components/atoms/TransferList/index";

type TransferListContainerProps = {
  data: [TransferListItem[], TransferListItem[]];
  setData: (_: [TransferListItem[], TransferListItem[]]) => void;
};

export const TransferListContainer = ({
  data,
  setData,
}: TransferListContainerProps) => (
  <TransferListPresenter data={data} setData={setData} />
);

import { useState } from "react";
import { IconChevronRight } from "@tabler/icons-react";
import {
  Combobox,
  TextInput,
  useCombobox,
  Checkbox,
  ActionIcon,
  Group,
} from "@mantine/core";

interface RenderListProps {
  options: TransferListItem[];
  type: "forward" | "backward";
  onTransfer(_options: TransferListItem[]): void;
}

const RenderList = ({ options, onTransfer, type }: RenderListProps) => {
  const combobox = useCombobox();
  const [value, setValue] = useState<TransferListItem[]>([]);
  const [search, setSearch] = useState("");

  const handleValueSelect = (val: string) => {
    if (value.map((v) => v.value).includes(val)) {
      setValue(value.filter((v) => v.value !== val));
    } else {
      setValue([...value, { label: val, value: val }]);
    }
  };

  const items = options
    .filter((item) =>
      item.value.toLowerCase().includes(search.toLowerCase().trim()),
    )
    .map((item) => (
      <Combobox.Option
        key={item.value}
        value={item.value}
        active={value.includes(item)}
        onMouseOver={() => combobox.resetSelectedOption()}
      >
        <Group gap="sm">
          <Checkbox
            checked={value.includes(item)}
            onChange={() => {}}
            aria-hidden
            tabIndex={-1}
            style={{ pointerEvents: "none" }}
          />
          <span>{item.label}</span>
        </Group>
      </Combobox.Option>
    ));

  return (
    <div className={"classes.renderList"} data-type={type}>
      <Combobox store={combobox} onOptionSubmit={handleValueSelect}>
        <Combobox.EventsTarget>
          <Group wrap="nowrap" gap={0} className={"classes.controls"}>
            <TextInput
              placeholder="Search groceries"
              classNames={{ input: "classes.input" }}
              value={search}
              onChange={(event) => {
                setSearch(event.currentTarget.value);
                combobox.updateSelectedOptionIndex();
              }}
            />
            <ActionIcon
              radius={0}
              variant="default"
              size={36}
              className={"classes.control"}
              onClick={() => {
                onTransfer(value);
                setValue([]);
              }}
            >
              <IconChevronRight className={"classes.icon"} />
            </ActionIcon>
          </Group>
        </Combobox.EventsTarget>

        <div className={"classes.list"}>
          <Combobox.Options>
            {items.length > 0 ? (
              items
            ) : (
              <Combobox.Empty>Nothing found....</Combobox.Empty>
            )}
          </Combobox.Options>
        </div>
      </Combobox>
    </div>
  );
};

export const TransferList = ({ data, setData }: TransferListContainerProps) => {
  const handleTransfer = (
    transferFrom: number,
    options: TransferListItem[],
  ) => {
    const transferTo = transferFrom === 0 ? 1 : 0;
    const transferFromData = data[transferFrom].filter(
      (item: TransferListItem) => !options.includes(item),
    );
    const transferToData = [...data[transferTo], ...options];

    const result: [TransferListItem[], TransferListItem[]] = [[], []];
    result[transferFrom] = transferFromData;
    result[transferTo] = transferToData;

    setData(result);
  };

  return (
    <div className={"classes.root"}>
      <RenderList
        type="forward"
        options={data[0]}
        onTransfer={(options) => handleTransfer(0, options)}
      />
      <RenderList
        type="backward"
        options={data[1]}
        onTransfer={(options) => handleTransfer(1, options)}
      />
    </div>
  );
};

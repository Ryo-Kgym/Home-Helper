/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { TransferListItem } from "@components/atoms/TransferList/index";
import { Combobox, useCombobox, ScrollArea } from "@mantine/core";

const TransferBox = ({
  data,
  height = "60vh",
}: {
  data: TransferListItem[];
  height?: string | number;
}) => {
  const combobox = useCombobox({ opened: true });

  const groupedData = data
    .map((item) => item.group)
    .filter((v, i, a) => a.indexOf(v) === i)
    .map((group) => ({
      group,
      items: data.filter((item) => item.group === group),
    }));

  return (
    <Combobox store={combobox}>
      <Combobox.Target>
        <div></div>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>
          <ScrollArea.Autosize type="scroll" h={height}>
            {groupedData.map((group) => (
              <Combobox.Group key={group.group} label={group.group}>
                {group.items.map((item) => (
                  <Combobox.Option key={item.value} value={item.value}>
                    {item.label}
                  </Combobox.Option>
                ))}
              </Combobox.Group>
            ))}
          </ScrollArea.Autosize>
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
};

type TransferListContainerProps = {
  data: [TransferListItem[], TransferListItem[]];
  setData: (_: [TransferListItem[], TransferListItem[]]) => void;
};
export const MantineTransferList = ({ data, setData }: TransferListContainerProps) => {
  return (
    <div className={"grid grid-cols-2"}>
      <TransferBox data={data[0]} />
      <TransferBox data={data[1]} />
    </div>
  );
};

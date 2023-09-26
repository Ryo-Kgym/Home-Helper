"use client";

import { Box } from "@mantine/core";
import { NavLink } from "@components/atoms";
import { useRouter } from "next/navigation";

type Props = {
  hidden?: boolean;
  defaultOpened?: boolean;
};
export const HouseholdMenu = ({
  hidden = false,
  defaultOpened = true,
}: Props) => {
  const { push } = useRouter();

  return (
    <Box className={"bg-gray-100 w-32"} hidden={hidden}>
      <NavLink label={"メニュー"} defaultOpened={defaultOpened}>
        <NavLink label={"<- 戻る"} onclick={() => push("/top")} />
        <NavLink
          label={"アカウント"}
          onclick={() => push("/household/account")}
        />
        <NavLink
          label={"カレンダー"}
          onclick={() => push("/household/daily")}
        />
        <NavLink label={"ジャンル"} onclick={() => push("/household/genre")} />
        <NavLink
          label={"カテゴリ"}
          onclick={() => push("/household/category")}
        />
        <NavLink label={"サマリ"} onclick={() => push("/household/summary")} />
        <NavLink
          label={"クレカ履歴"}
          onclick={() => push("/household/creditCard")}
        />
        <NavLink
          label={"ファイル取込"}
          onclick={() => push("/household/fileImport")}
        />
        <NavLink label={"設定"} onclick={() => push("/household/setting")} />
      </NavLink>
    </Box>
  );
};

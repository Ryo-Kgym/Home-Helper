/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

"use client";

import { NavLink } from "@components/atoms";
import { Box } from "@mantine/core";
import { useRouter } from "next/navigation";

type Props = {
  hidden?: boolean;
  defaultOpened?: boolean;
};
export const HelperKidsMenu = ({
  hidden = false,
  defaultOpened = true,
}: Props) => {
  const { push } = useRouter();

  return (
    <Box className={"bg-gray-100 w-32"} hidden={hidden}>
      <NavLink label={"メニュー"} defaultOpened={defaultOpened}>
        <NavLink label={"<- 戻る"} onclick={() => push("/top")} />
        <NavLink label={"キッズ"} onclick={() => push("/helperKids/kid")} />
        <NavLink
          label={"ためる"}
          onclick={() => push("/helperKids/chargePoint")}
        />
        <NavLink
          label={"つかう"}
          onclick={() => push("/helperKids/exchangePoint")}
        />
        <NavLink
          label={"履歴"}
          onclick={() => push("/helperKids/pointHistory")}
        />
        {/*<NavLink*/}
        {/*  label={"お手伝い項目"}*/}
        {/*  onclick={() => push("/helperKids/helpItem/register")}*/}
        {/*/>*/}
        {/*<NavLink*/}
        {/*  label={"交換品"}*/}
        {/*  onclick={() => push("/helperKids/exchangeItem/register")}*/}
        {/*/>*/}
      </NavLink>
    </Box>
  );
};

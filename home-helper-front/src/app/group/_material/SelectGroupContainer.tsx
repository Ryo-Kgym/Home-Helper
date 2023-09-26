/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

"use client";

import { useAuth } from "@hooks/authentication/useAuth";
import { useGetGroup } from "@hooks/group/useGetGroup";
import { useGroup } from "@hooks/group/useGroup";
import { useUser } from "@hooks/user/useUser";
import { SelectGroupPresenter } from "./SelectGroupPresenter";

export const SelectGroupContainer = () => {
  const { save: userSave } = useUser();
  const { save: groupSave } = useGroup();
  const { user, groups: data } = useGetGroup();
  const { logout } = useAuth();

  const linkProps = [
    {
      href: "/",
      label: "ログアウト",
      back: true,
      handleClick: logout,
    },
  ].concat(
    data.map(({ group }) => ({
      href: "/top",
      label: group.name,
      back: false,
      handleClick: () => {
        userSave(user!);
        groupSave(group);
      },
    })) ?? [],
  );

  return <SelectGroupPresenter linkProps={linkProps} />;
};

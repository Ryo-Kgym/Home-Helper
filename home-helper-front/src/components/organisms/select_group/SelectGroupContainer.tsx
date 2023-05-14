import { useUser } from "@hooks/user/useUser";
import { useGroup } from "@hooks/group/useGroup";
import { SelectGroupPresenter } from "@components/organisms/select_group/SelectGroupPresenter";
import { useGetGroup } from "@hooks/group/useGetGroup";
import { signOut } from "next-auth/react";

export const SelectGroupContainer = () => {
  const { save: userSave } = useUser();
  const { save: groupSave } = useGroup();
  const { user, groups: data } = useGetGroup();

  const linkProps = [
    {
      href: "#",
      label: "ログアウト",
      back: true,
      handleClick: () => {
        signOut({ callbackUrl: "/" });
      },
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
    })) ?? []
  );

  return <SelectGroupPresenter linkProps={linkProps} />;
};

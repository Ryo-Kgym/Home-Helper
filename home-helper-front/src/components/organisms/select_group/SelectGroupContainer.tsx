import { useUser } from "@hooks/user/useUser";
import { useGroup } from "@hooks/group/useGroup";
import { SelectGroupPresenter } from "@components/organisms/select_group/SelectGroupPresenter";
import { useGetGroup } from "@hooks/group/useGetGroup";
import { useAuth } from "@hooks/authentication/useAuth";
import { useEffect } from "react";

export const SelectGroupContainer = () => {
  const { save: userSave } = useUser();
  const { save: groupSave } = useGroup();
  const { user, groups: data } = useGetGroup();
  const { logout } = useAuth();

  const linkProps = [
    {
      href: "#",
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
        groupSave(group);
      },
    })) ?? []
  );

  useEffect(() => {
    userSave(user!);
  }, []);

  return <SelectGroupPresenter linkProps={linkProps} />;
};

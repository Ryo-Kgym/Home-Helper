import { useUser } from "@hooks/user/useUser";
import { useGroup } from "@hooks/group/useGroup";
import { LinkProps } from "@components/atoms/Card";
import { SelectGroupPresenter } from "@components/organisms/select_group/SelectGroupPresenter";
import { useGetGroup } from "@hooks/group/useGetGroup";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const SelectGroupContainer = () => {
  const { push } = useRouter();
  const { save: userSave } = useUser();
  const { save: groupSave } = useGroup();
  const { user, groups: data } = useGetGroup();
  const [linkProps, setLinkProps] = useState<LinkProps[]>([]);

  useEffect(() => {
    setLinkProps(
      [
        {
          href: "/",
          label: "ログアウト",
          back: true,
          handleClick: () => {
            signOut();
            push("/");
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
      )
    );
  }, []);

  return <SelectGroupPresenter linkProps={linkProps} />;
};

import { FC } from "react";
import { HouseHoldPresenter } from "./HouseHoldPresenter";
import { useGetAllUsersQuery } from "@graphql/postgraphile/generated/graphql";
import { useUser } from "@hooks/user/useUser";
import { LinkProps } from "@components/atoms/Card";
import { useGroup } from "@hooks/group/useGroup";

export const HouseHoldContainer: FC = () => {
  const { save } = useUser();
  const { save: groupSave } = useGroup();
  const [{ data }] = useGetAllUsersQuery();

  const linkProps: LinkProps[] = [INIT_LINK_PROP].concat(
    data?.users?.map((user) => {
      return {
        href: "/household/account",
        label: user.name,
        back: false,
        handleClick: () => {
          save({ userId: user.id, userName: user.name });
          groupSave({
            id: user.group?.id ?? "",
            name: user.group?.name ?? "",
          });
        },
      };
    }) ?? []
  );

  return <HouseHoldPresenter linkProps={linkProps} />;
};

const INIT_LINK_PROP = {
  href: "/",
  label: "戻る",
  back: true,
};

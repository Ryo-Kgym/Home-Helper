import { FC } from "react";
import { HouseHoldPresenter } from "./HouseHoldPresenter";
import { useGetAllUsersQuery } from "@graphql/postgraphile/generated/graphql";
import { useUser } from "@hooks/user/useUser";
import { LinkProps } from "@components/atoms/Card";

export const HouseHoldContainer: FC = () => {
  const { save } = useUser();
  const [{ data }] = useGetAllUsersQuery();

  const linkProps: LinkProps[] = [INIT_LINK_PROP].concat(
    data?.allUsersList?.map((user) => {
      return {
        href: "/household/account",
        label: user.userName,
        back: false,
        handleClick: () => {
          save(user.userId);
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

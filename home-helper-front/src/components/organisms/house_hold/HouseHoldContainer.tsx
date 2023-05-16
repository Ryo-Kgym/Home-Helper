import { FC } from "react";
import { HouseHoldPresenter } from "./HouseHoldPresenter";
import { useGetAllUsersQuery } from "@graphql/postgraphile/generated/graphql";
import { LinkProps } from "@components/atoms/Card";

export const HouseHoldContainer: FC = () => {
  const [{ data }] = useGetAllUsersQuery();

  const linkProps: LinkProps[] = [INIT_LINK_PROP].concat(
    data?.users?.map((user) => {
      return {
        href: "/household/account",
        label: user.name,
        back: false,
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

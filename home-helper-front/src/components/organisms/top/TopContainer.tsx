/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

"use client";

import { LinkProps } from "@components/atoms/Card";
import { useGetApplicationByGroupIdQuery } from "@graphql/hasura/generated/hasuraGraphql";
import { useGroup } from "@hooks/group/useGroup";
import { TopPresenter } from "./TopPresenter";

export const TopContainer = () => {
  const { groupId } = useGroup();
  const [{ data }] = useGetApplicationByGroupIdQuery({
    variables: { groupId },
  });

  const props: LinkProps[] = [
    { href: "/group", label: "戻る", back: true } as LinkProps,
  ].concat(
    data?.group.map(({ app }) => ({
      href: app.topUrl,
      label: app.name,
    })) ?? [],
  );
  return <TopPresenter linkListProps={props} />;
};

"use client";

import { TopPresenter } from "./TopPresenter";
import { useGetApplicationByGroupIdQuery } from "@graphql/hasura/generated/hasuraGraphql";
import { useGroup } from "@hooks/group/useGroup";
import { LinkProps } from "@components/atoms/Card";

export const TopContainer = () => {
  const { groupId } = useGroup();
  const [{ data }] = useGetApplicationByGroupIdQuery({
    variables: { groupId },
  });

  const props: LinkProps[] = [
    { href: "/select", label: "戻る", back: true } as LinkProps,
  ].concat(
    data?.group.map(({ app }) => ({
      href: app.topUrl,
      label: app.name,
    })) ?? [],
  );
  return <TopPresenter linkListProps={props} />;
};

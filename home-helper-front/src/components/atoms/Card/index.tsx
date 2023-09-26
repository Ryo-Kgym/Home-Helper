/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { LinkContainer } from "./LinkContainer";

export type LinkProps = {
  href: string;
  label: string;
  back?: boolean;
  handleClick?: () => void;
};

export const LinkList = ({ props }: { props: LinkProps[] }) => (
  <div className={"space-y-5"}>
    {props.map((p, i) => (
      <LinkContainer
        href={p.href}
        label={p.label}
        back={p.back}
        handleClick={p.handleClick}
        key={"link" + i}
      />
    ))}
  </div>
);

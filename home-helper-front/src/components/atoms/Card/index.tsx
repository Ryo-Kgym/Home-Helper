import { FC } from "react";
import { LinkContainer } from "@components/atoms/Card/LinkContainer";

export type LinkProps = {
  href: string;
  label: string;
  back?: boolean;
  handleClick?: () => void;
};

export const LinkList: FC<{ props: LinkProps[] }> = ({ props }) => {
  return (
    <div className={"grid"}>
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
};

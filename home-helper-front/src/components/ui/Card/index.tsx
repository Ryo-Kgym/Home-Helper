import { FC } from "react";
import { Grid } from "@components/ui/Grid";
import { LinkContainer } from "@components/ui/Card/LinkContainer";

export { LinkContainer as Link } from "./LinkContainer";

export type LinkProps = {
  href: string;
  label: string;
  back?: boolean;
  handleClick?: () => void;
};

export const LinkList: FC<{ props: LinkProps[] }> = ({ props }) => {
  return (
    <Grid>
      <>
        {props.map((p, i) => {
          return (
            <LinkContainer
              href={p.href}
              label={p.label}
              back={p.back}
              handleClick={p.handleClick}
              key={"link" + i}
            />
          );
        })}
      </>
    </Grid>
  );
};

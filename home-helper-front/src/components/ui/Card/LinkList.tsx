import { FC } from "react";
import { CardProps, index as Card } from "@components/ui/Card/index";
import { Grid } from "@components/ui/Grid";

export const LinkList: FC<{ props: CardProps[] }> = ({ props }) => {
  return (
    <Grid>
      <>
        {props.map((p, i) => {
          return (
            <Card
              href={p.href}
              label={p.label}
              back={p.back}
              handleClick={p.handleClick}
              key={"card" + i}
            />
          );
        })}
      </>
    </Grid>
  );
};

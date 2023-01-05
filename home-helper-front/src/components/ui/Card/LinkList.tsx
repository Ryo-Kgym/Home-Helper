import styles from "@components/ui/ui.module.scss";
import { FC } from "react";
import { index as Card, CardProps } from "@components/ui/Card/index";

export const LinkList: FC<{ props: CardProps[] }> = ({ props }) => {
  return (
    <div className={styles.grid}>
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
    </div>
  );
};

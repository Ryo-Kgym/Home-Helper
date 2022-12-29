import Link from "next/link";
import styles from "../ui.module.scss";
import { FC } from "react";

export type CardProps = {
  href: string;
  label: string;
  back?: boolean;
  handleClick?: () => void;
};

export const index: FC<CardProps> = ({ back, label, href, handleClick }) => {
  const text = back ? <h2>&larr; {label}</h2> : <h2> {label} &rarr;</h2>;

  return (
    <Link href={href} className={styles.card} onClick={handleClick}>
      {text}
    </Link>
  );
};

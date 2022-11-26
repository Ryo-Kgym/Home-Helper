import Link from "next/link";
import styles from "./ui.module.scss";

const Card = ({ props }: { props: CardProps }) => {
  const label = props.back ? (
    <h2>&larr; {props.label}</h2>
  ) : (
    <h2> {props.label} &rarr;</h2>
  );

  return (
    <>
      <Link
        href={props.href}
        className={styles.card}
        onClick={props.handleClick}
      >
        {label}
      </Link>
    </>
  );
};

export default Card;

export const CardLinkList = ({ props }: { props: CardProps[] }) => {
  return (
    <div className={styles.grid}>
      {props.map((p, i) => {
        return <Card props={p} key={"card" + i} />;
      })}
    </div>
  );
};

export const BackCardLinkList = ({ href }: { href: string }) => {
  const props: CardProps[] = [
    {
      href: href,
      label: "戻る",
      back: true,
    },
  ];

  return <CardLinkList props={props} />;
};

export type CardProps = {
  href: string;
  label: string;
  back?: boolean;
  handleClick?: () => void;
};

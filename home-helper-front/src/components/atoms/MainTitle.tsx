import styles from "./ui.module.scss";

export const MainTitle = (props: { label: string }) => {
  return <h1 className={styles.title}>{props.label}</h1>;
};

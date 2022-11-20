import styles from "../../styles/Home.module.css";

const MainTitle = (props: {
    label: string,
}) => {
    return (
        <h1 className={styles.title}>
            {props.label}
        </h1>
    )
}
export default MainTitle
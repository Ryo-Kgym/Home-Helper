import Link from "next/link";
import styles from "../../styles/Home.module.css";

const Card = (props: {
    href: string,
    label: string,
}) => {
    return (
        <>
            <Link href={props.href} className={styles.card}>
                <h2>{props.label} &rarr;</h2>
            </Link>
        </>
    )
}

export default Card
import Link from "next/link";
import styles from "../../styles/Home.module.css";

const Card = (props: CardProps) => {
    const label = props.back
        ? <h2>&larr; {props.label}</h2>
        : <h2> {props.label} &rarr;</h2>

    return (
        <>
            <Link href={props.href} className={styles.card}>
                {label}
            </Link>
        </>
    )
}

export default Card

export const CardLinkList = (props: {
    pageList: CardProps[]
}) => {
    return (
        <div className={styles.grid}>
            {props.pageList.map((e, i) => {
                return (
                    <Card
                        href={e.href}
                        label={e.label}
                        back={e.back}
                        key={'card' + i}
                    />
                )
            })}
        </div>
    )
}

export interface CardProps {
    href: string
    label: string
    back?: boolean
}
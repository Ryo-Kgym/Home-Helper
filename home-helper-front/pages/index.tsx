import styles from '../styles/Home.module.css'
import Card from "../components/ui/Card";
import Layout from "../components/page/Layout";

const pageList = [
    {href: '/homeHelper', label: 'お手伝いアプリ'},
    {href: '/household', label: '家計簿アプリ'},
]

const index = () => {
    return (
        <Layout
            main={
                <>
                    <HomeTitle/>
                    <HomeLink/>
                </>
            }
        />
    )
}
export default index

const HomeTitle = () => {
    return (
        <h1 className={styles.title}>
            うちのアプリへようこそ！
        </h1>
    )
}

const HomeLink = () => {
    return (
        <div className={styles.grid}>
            {pageList.map((e, i) => {
                return (
                    <Card
                        href={e.href}
                        label={e.label}
                        key={'card' + i}
                    />
                )
            })}
        </div>
    )
}
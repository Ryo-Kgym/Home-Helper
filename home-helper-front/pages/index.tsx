import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Card from "../components/ui/Card";

const pageList = [
    {href: '/homeHelper', label: 'お手伝いアプリ'},
    {href: '/household', label: '家計簿アプリ'},
]

export default function index() {
    return (
        <div className={styles.container}>
            <HomeHeader/>

            <main className={styles.main}>
                <HomeTitle/>
                <HomeLink/>
            </main>
        </div>
    )
}

const HomeHeader = () => {
    return (
        <Head>
            <title>うちのアプリ</title>
            <meta name="description" content="これは、うちの支援アプリです。"/>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
    )
}

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
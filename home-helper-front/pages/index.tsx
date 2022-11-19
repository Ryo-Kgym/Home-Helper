import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from "next/link";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>うちのアプリ</title>
                <meta name="description" content="これは、うちの支援アプリです。"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    うちのアプリへようこそ！
                </h1>

                <div className={styles.grid}>
                    <Link href={'/homeHelper'} className={styles.card}>
                        <h2>お手伝いアプリ &rarr;</h2>
                    </Link>
                    <Link href={'/household'} className={styles.card}>
                        <h2>家計簿アプリ &rarr;</h2>
                    </Link>
                </div>
            </main>
        </div>
    )
}

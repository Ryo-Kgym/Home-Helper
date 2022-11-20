import styles from "../../styles/Home.module.css";
import {ReactElement} from "react";
import Head from "next/head";

const Layout = (props: {
    main: ReactElement,
}) => {
    return (
        <div className={styles.container}>
            <AppHeader/>

            <main className={styles.main}>
                {props.main}
            </main>
        </div>

    )
}
export default Layout

// TODO フォントをシネキャプションにする
const AppHeader = () => {
    return (
        <Head>
            <title>うちのアプリ</title>
            <meta name="description" content="これは、うちの支援アプリです。"/>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
    )
}
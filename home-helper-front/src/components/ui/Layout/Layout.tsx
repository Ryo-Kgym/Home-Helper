import homeStyle from "../../../styles/Home.module.css";
import styles from "./styles.module.scss";
import { ReactElement } from "react";
import Head from "next/head";

export const Layout = (props: { main: ReactElement }) => {
  return (
    <div>
      <AppHeader />
      <div className={homeStyle.container}>
        <main className={styles.main}>{props.main}</main>
      </div>
    </div>
  );
};

// TODO フォントをシネキャプションにする
const AppHeader = () => {
  return (
    <Head>
      <title>うちのアプリ</title>
      <meta name="description" content="これは、うちの支援アプリです。" />
      <link rel="icon" href="@public/favicon.ico" />
    </Head>
  );
};

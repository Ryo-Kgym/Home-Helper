import homeStyle from "../../../styles/Home.module.css";
import styles from "./styles.module.scss";
import { FC, ReactElement } from "react";
import Head from "next/head";

type Props = {
  children: ReactElement;
};
export const Html: FC<Props> = ({ children }) => {
  return (
    <div>
      <AppHeader />
      <div className={homeStyle.container}>
        <main className={styles.main}>{children}</main>
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

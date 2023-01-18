import { FC, ReactElement } from "react";
import Head from "next/head";

type Props = {
  children: ReactElement;
};
export const Html: FC<Props> = ({ children }) => {
  return (
    <div>
      <AppHeader />
      <div>
        <main>{children}</main>
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
      <link rel="icon" href="src/public/favicon.ico" />
    </Head>
  );
};

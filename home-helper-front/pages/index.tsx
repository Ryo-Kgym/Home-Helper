import { CardLinkList } from "../components/ui/Card";
import { Layout } from "../components/ui/Layout";
import MainTitle from "../components/ui/MainTitle";

const pageList = [
  { href: "/homeHelper", label: "お手伝いアプリ" },
  { href: "/household", label: "家計簿アプリ" },
];

const index = () => {
  return (
    <Layout
      main={
        <>
          <MainTitle label={"うちのアプリへようこそ！"} />
          <CardLinkList pageList={pageList} />
        </>
      }
    />
  );
};
export default index;

import { CardLinkList } from "../components/ui/Card";
import { NonHeaderLayout } from "../components/presenter/Layout";
import MainTitle from "../components/ui/MainTitle";

const pageList = [
  { href: "/homeHelper", label: "お手伝いアプリ" },
  { href: "/household", label: "家計簿アプリ" },
];

const index = () => {
  return (
    <NonHeaderLayout
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

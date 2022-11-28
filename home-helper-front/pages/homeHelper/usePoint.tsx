import { Page } from "@components/page/use_point/UsePointPage";

const index = (props: any) => {
  return <Page data={props.data} />;
};
export default index;

export async function getServerSideProps() {
  const exchangeItems = [
    { id: 1, count: 1, point: 500, name: "お菓子" },
    { id: 2, count: 1, point: 1000, name: "お小遣い" },
    { id: 3, count: 2, point: 3000, name: "プラレール(3000円)" },
  ];

  const data = {
    exchangeItems: exchangeItems,
    currentPoint: 30000,
  };

  return { props: { data } };
}

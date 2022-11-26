import { Page } from "@components/page/charge_point/ChargePointPage";

const index = (props: any) => {
  return <Page data={props.data} />;
};
export default index;

export async function getServerSideProps() {
  const helpItems = [
    { id: 1, count: 1, point: 100, name: "お皿運び" },
    { id: 2, count: 1, point: 200, name: "お風呂掃除" },
    { id: 3, count: 2, point: 300, name: "トイレ掃除" },
    { id: 4, count: 1, point: 50, name: "水やり" },
    { id: 5, count: 1, point: 10, name: "お片付け" },
  ];

  const data = {
    fromDate: "11月13日",
    helpItems: helpItems,
  };

  return { props: { data } };
}

import { Page } from "../../components/page/home_helper/HomeHelperTemplate";

const index = (props: any) => {
  return <Page data={props.data} />;
};
export default index;

export async function getStaticProps() {
  const userList = [
    { id: "1", name: "ユーザ1" },
    { id: "2", name: "ユーザ2" },
  ];

  const data = {
    userList: userList,
  };

  return { props: { data } };
}

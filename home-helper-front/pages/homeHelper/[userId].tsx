import { Page } from "@components/page/prosession_point/PossessionPointPage";

const index = (props: any) => <Page data={props.data} />;

export default index;

export async function getServerSideProps(context: any) {
  const userId = String(context.query.userId);

  // const res = await fetch(`https://.../data`)
  const data = {
    id: userId,
    name: "ユーザ" + userId,
    point: 300000,
  };

  return { props: { data } };
}

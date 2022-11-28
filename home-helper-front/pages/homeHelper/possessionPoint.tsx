import { Page } from "@components/page/prosession_point/PossessionPointPage";
import piggy from "@public/piggy_bank.svg";

const index = (props: any) => <Page data={props.data} />;

export default index;

export async function getStaticProps() {
  const data = {
    piggy: piggy,
  };
  return { props: { data } };
}

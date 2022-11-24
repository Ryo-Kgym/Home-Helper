import {PossessionPointPresenter} from "../../components/aggregations/possession_point/PossessionPointPresenter";
import {PossessionPointContainer} from "../../components/aggregations/possession_point/PossessionPointContainer";


const index = (props: {
    data: {
        id: number,
        name: string,
        point: number,
    }
}) =>
    <PossessionPointContainer
        id={props.data.id}
        name={props.data.name}
        point={props.data.point}
    />

export default index


export async function getServerSideProps(context: any) {
    const userId = String(context.query.userId);

    // const res = await fetch(`https://.../data`)
    const data = {
        id: userId,
        name: 'ユーザ' + userId,
        point: 300000,
    }

    return {props: {data}}
}

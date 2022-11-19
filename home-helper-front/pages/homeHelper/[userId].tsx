import Layout from "../../components/page/Layout";
import {CardLinkList} from "../../components/ui/Card";

const pageList = [
    {href: '/homeHelper', label: '戻る', back: true,},
    {href: '/homeHelper/chargePoint', label: 'ためる',},
    {href: '/homeHelper/usePoint', label: 'つかう',},
]

const pointStyle = {
    borderRadius: '10px',
    border: 'solid 2px gray',
    width: '800px',
    height: '200px',
    fontSize: '150px',
    textAlign: 'center',
}

const index = (props: { data: UserPoint }) => {

    return (
        <Layout main={
            <>
                <Point
                    id={props.data.id}
                    name={props.data.name}
                    point={props.data.point}
                />
                <CardLinkList
                    pageList={pageList}
                />
            </>
        }/>
    )
}
export default index

const Point = (props: UserPoint) => {
    return (
        <>
            <div>{props.name} さんの今のポイント</div>
            <div style={pointStyle}>
                {props.point}
            </div>

        </>
    )
}

export async function getServerSideProps(context: any) {
    const userId = String(context.query.userId);

    // const res = await fetch(`https://.../data`)
    const data = {
        id: userId,
        name: 'ユーザ1',
        point: 3000,
    }

    return {props: {data}}
}

interface UserPoint {
    id: number
    name: string
    point: number
}
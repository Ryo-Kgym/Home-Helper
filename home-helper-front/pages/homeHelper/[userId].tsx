import {Layout} from "../../components/page/Layout";
import {CardLinkList} from "../../components/ui/Card";
import Image from 'next/image'
import thisStyle from '../../styles/UserPoint.module.css'
import Countup from "react-countup";
import {Box} from '@mantine/core';

const pageList = [
    {href: '/homeHelper', label: '戻る', back: true,},
    {href: '/homeHelper/chargePoint', label: 'ためる',},
    {href: '/homeHelper/usePoint', label: 'つかう',},
]

const index = (props: { data: UserPoint }) =>
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
export default index

const Point = (props: UserPoint) =>
    <>
        <Box>{props.name} さんの今のポイント</Box>

        <Box className={thisStyle.frame}>
            <Box className={thisStyle.point}>
                <Countup end={props.point} duration={1}/>
            </Box>
            <Box className={thisStyle.pointUnit}>
                kgp
            </Box>
            <Box className={thisStyle.piggy}>
                <Image src="/piggy_bank.svg" alt="Piggy Bank" width={100} height={100}/>
            </Box>
        </Box>

    </>

export async function getServerSideProps(context: any) {
    const userId = String(context.query.userId);

    // const res = await fetch(`https://.../data`)
    const data = {
        id: userId,
        name: 'ユーザ' + userId,
        point: 3000,
    }

    return {props: {data}}
}

interface UserPoint {
    id: number
    name: string
    point: number
}
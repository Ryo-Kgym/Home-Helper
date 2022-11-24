import {FC} from "react";
import {Template} from "../../page/Layout";
import {CardLinkList} from "../../ui/Card";
import {Flex} from "@mantine/core";
import Countup from "react-countup";
import styles from './styles.module.scss'
import Image from "next/image";
import piggy from '../../../public/piggy_bank.svg'

type PossessionPointPresenterProps = {
    id: number,
    name: string,
    point: number,
}

const pageList = [
    // {href: '/homeHelper', label: '戻る', back: true,},
    {href: '/homeHelper/chargePoint', label: 'ためる',},
    {href: '/homeHelper/usePoint', label: 'つかう',},
]

export const PossessionPointPresenter: FC<PossessionPointPresenterProps> = (props: {
    id: number
    name: string
    point: number
}) =>
    <Template body={
        <>
            <Point
                id={props.id}
                name={props.name}
                point={props.point}
            />
            <CardLinkList
                pageList={pageList}
            />
        </>
    }/>

const Point = (props: {
    id: number,
    name: string,
    point: number,
}) =>
    <>
        <Flex className={styles.pointFrame} wrap={"wrap"}>
            <Flex className={styles.pointTitle}>今のポイント</Flex>
            <Flex className={styles.pointArea}>
                <Countup end={props.point}
                         duration={1}
                         formattingFn={n => n.toLocaleString()}/>
                <Flex>pt</Flex>
            </Flex>
            <Flex>
                <Image src={piggy} alt={'piggy'} className={styles.piggy}/>
            </Flex>
        </Flex>
    </>


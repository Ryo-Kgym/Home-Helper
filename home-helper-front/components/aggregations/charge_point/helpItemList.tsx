/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

import {useState} from "react";
import {Flex, Table} from "@mantine/core";
import {PopOver} from "../../ui/popOver";

export const HelpItemList = () => {
    const [totalPoint, setTotalPoint] = useState(0)

    const elements = [
        {id: 1, count: 1, point: 100, name: 'お皿運び'},
        {id: 2, count: 1, point: 200, name: 'お風呂掃除'},
        {id: 3, count: 2, point: 300, name: 'トイレ掃除'},
        {id: 4, count: 1, point: 50, name: '水やり'},
        {id: 5, count: 1, point: 10, name: 'お片付け'},
    ]

    const rows = elements.map((element) => (
        <tr key={element.name}>
            <td>{element.id}</td>
            <td>{element.name}</td>
            <td>{element.point}</td>
            <td onClick={() => {
                handleClickCount(element.point, element.count)
            }}>{element.count}</td>
        </tr>
    ))

    const handleClickCount = (point: number, count: number) => {
        setTotalPoint(totalPoint + point * count)
    }

    return (
        <>
            <Table striped highlightOnHover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>お手伝い</th>
                    <th>ポイント</th>
                    <th>回数</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </Table>
            <TotalDeclare
                total={totalPoint}
            />
        </>
    )
}

export const TotalDeclare = (props: {
    total: number,
}) => {
    const sx = {
        fontSize: '30px',
        margin: '5px',
    }

    const handleClickDecide = () => {
        alert(props.total.toLocaleString() + 'ポイント 獲得！')
    }

    return (
        <Flex
            mih={50}
            gap="xs"
            justify="flex-end"
            align="center"
            direction="row"
            wrap="wrap"
            sx={sx}
        >
            <Flex
            >合計</Flex>
            <Flex
                justify="flex-end"
                sx={{
                    width: '100px',
                }}
            >
                {props.total.toLocaleString()}
            </Flex>
            <Flex
                justify="center"
                sx={{
                    width: '100px',
                }}
            >
                <PopOver
                    handleClick={handleClickDecide}
                />
            </Flex>
        </Flex>
    )
}
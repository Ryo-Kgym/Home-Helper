import {Button, Center, Flex, Grid, Popover, Table, Text} from '@mantine/core';
import {useState} from "react";

// TODO change structure
const index = (props: {
    data: {
        fromDate: string
        toDate: string
    }
}) => {
    return (
        <>
            <DeclareTerm
                fromDate={props.data.fromDate}
                toDate={props.data.toDate}
            />
            <HelpItemList/>
        </>)
}
export default index

const DeclareTerm = (props: {
    fromDate: string
    toDate: string
}) => {
    const sx = {
        fontSize: '30px',
        margin: '5px',
        maxWidth: '500px',
    }

    return (
        <Grid grow sx={sx}>
            <Grid.Col span={5}>
                <Center>{props.fromDate}</Center>
            </Grid.Col>
            <Grid.Col span={'auto'}>
                <Center>〜</Center>
            </Grid.Col>
            <Grid.Col span={5}>
                <Center>{props.toDate}</Center>
            </Grid.Col>
        </Grid>
    )
}

const HelpItemList = () => {
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

const TotalDeclare = (props: {
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

export async function getServerSideProps() {
    const data = {
        fromDate: "11月13日",
        toDate: "今日",
    }

    return {props: {data}}
}

function PopOver(handleClick: any) {
    return (
        <Popover width={200} position="bottom" withArrow shadow="md">
            <Popover.Target>
                <Button onClick={handleClick}>決定</Button>
            </Popover.Target>
            <Popover.Dropdown>
                <Text size="sm">This is uncontrolled popover, it is opened when button is clicked</Text>
            </Popover.Dropdown>
        </Popover>
    );
}
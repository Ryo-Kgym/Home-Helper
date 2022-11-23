import {Box, Center, Flex, Grid, Table} from "@mantine/core";
import {FC} from "react";
import {PopOver} from "../../ui/popOver";

type ChargePointPresenterProps = {
    fromDate: string,
    elements: any[],
    handleClickCount: any,
    totalPoint: number,
}

export const ChargePointPresenter:
    FC<ChargePointPresenterProps> = (props) => {

    const rows = props.elements.map((element) => (
        <tr key={element.name}>
            <td>{element.id}</td>
            <td>{element.name}</td>
            <td>{element.point}</td>
            <td onClick={() => {
                props.handleClickCount(element.point, element.count)
            }}>{element.count}</td>
        </tr>
    ))

    return (
        <>
            <Box>
                <DeclareTerm
                    fromDate={props.fromDate}
                    toDate={'今日'}
                />
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
                    total={props.totalPoint}
                />
            </Box>
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
            justify="flex-end"
            align="center"
            direction="row"
            wrap="wrap"
            sx={sx}
        >
            <Flex>合計</Flex>
            <Flex justify="flex-end"
                  sx={{width: '100px'}}>
                {props.total.toLocaleString()}
            </Flex>
            <Flex justify="center"
                  sx={{width: '100px'}}>
                <PopOver handleClick={handleClickDecide}/>
            </Flex>
        </Flex>
    )
}

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
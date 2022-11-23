
import {Center, Grid} from "@mantine/core";

export const DeclareTerm = (props: {
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
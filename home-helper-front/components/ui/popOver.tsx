import {Button, Popover, Text} from "@mantine/core";

export const PopOver = (handleClick: any) => {
    return (
        <Popover width={200} position="top" withArrow shadow="md">
            <Popover.Target>
                <Button onClick={handleClick}>決定</Button>
            </Popover.Target>
            <Popover.Dropdown>
                <Text size="sm">This is uncontrolled popover, it is opened when button is clicked</Text>
            </Popover.Dropdown>
        </Popover>
    );
}
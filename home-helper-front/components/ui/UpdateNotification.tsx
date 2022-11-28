import { Group, Button } from "@mantine/core";
import { showNotification, updateNotification } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons";
import { FC } from "react";

type UpdateNotificationProps = {
  label: string;
  showTitle: string;
  showMessage: string;
  updateTitle: string;
  updateMessage: string;
  handleClick: () => void;
  handleAfterProcess: () => void;
  updateTime?: number;
  autoClose?: number;
};

export const UpdateNotification: FC<UpdateNotificationProps> = (props) => {
  return (
    <Group position="center">
      <Button
        onClick={() => {
          showNotification({
            id: "load-data",
            loading: true,
            title: props.showTitle,
            message: props.showMessage,
            autoClose: false,
            disallowClose: true,
          });

          props.handleClick();

          setTimeout(() => {
            updateNotification({
              id: "load-data",
              color: "teal",
              title: props.updateTitle,
              message: props.updateMessage,
              icon: <IconCheck size={16} />,
              autoClose: props.autoClose ?? 2000,
            });
            props.handleAfterProcess();
          }, props.updateTime ?? 3000);
        }}
      >
        {props.label}
      </Button>
    </Group>
  );
};

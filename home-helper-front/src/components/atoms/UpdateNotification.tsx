import { FC } from "react";
import { Group, Button } from "@mantine/core";
import { IconCheck } from "@tabler/icons";
import { showNotification, updateNotification } from "@mantine/notifications";
import styles from "./ui.module.scss";

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

export const UpdateNotification: FC<UpdateNotificationProps> = ({
  label,
  showTitle,
  showMessage,
  updateTitle,
  updateMessage,
  handleClick,
  handleAfterProcess,
  updateTime,
  autoClose,
}) => {
  return (
    <Group position="center">
      <Button
        onClick={() => {
          showNotification({
            id: "load-data",
            loading: true,
            title: showTitle,
            message: showMessage,
            autoClose: false,
            disallowClose: true,
          });

          handleClick();

          setTimeout(() => {
            updateNotification({
              id: "load-data",
              color: "teal",
              title: updateTitle,
              message: updateMessage,
              icon: <IconCheck size={16} />,
              autoClose: autoClose ?? 2000,
            });
            handleAfterProcess();
          }, updateTime ?? 3000);
        }}
        className={"h-24 w-30 text-3xl bg-blue-500"}
      >
        {label}
      </Button>
    </Group>
  );
};

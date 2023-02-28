import { Modal, useMantineTheme } from "@mantine/core";
import { FC, ReactNode } from "react";

type ModalPresenterProps = {
  opened: boolean;
  onClose: () => void;
  children: ReactNode;
};

export const ModalPresenter: FC<ModalPresenterProps> = ({
  opened,
  onClose,
  children,
}) => {
  const theme = useMantineTheme();

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
    >
      {children}
    </Modal>
  );
};
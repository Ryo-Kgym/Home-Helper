import { Modal, useMantineTheme } from "@mantine/core";
import { ReactNode } from "react";

type ModalPresenterProps = {
  opened: boolean;
  onClose: () => void;
  children: ReactNode;
};

export const ModalPresenter = ({
  opened,
  onClose,
  children,
}: ModalPresenterProps) => {
  const theme = useMantineTheme();
  const overlayProps = {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[9]
        : theme.colors.gray[2],
    opacity: 0.55,
  };
  return (
    <Modal opened={opened} onClose={onClose} overlayProps={overlayProps}>
      {children}
    </Modal>
  );
};

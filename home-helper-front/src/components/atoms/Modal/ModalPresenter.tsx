import { Modal, useMantineTheme } from "@mantine/core";
import { FC, ReactNode } from "react";

type ModalPresenterProps = {
  opened: boolean;
  onClose: () => void;
  children: ReactNode;
  size?: string;
};

export const ModalPresenter: FC<ModalPresenterProps> = ({
  opened,
  onClose,
  children,
  size = "70%",
}) => {
  const theme = useMantineTheme();

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      overlayProps={{
        color:
          theme.colorScheme === "dark"
            ? theme.colors.dark[9]
            : theme.colors.gray[2],
        opacity: 0.55,
        blur: 3,
      }}
      size={size}
    >
      {children}
    </Modal>
  );
};

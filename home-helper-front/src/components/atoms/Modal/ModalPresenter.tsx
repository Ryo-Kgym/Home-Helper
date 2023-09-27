/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { Modal } from "@mantine/core";
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
}: ModalPresenterProps) => (
  <Modal opened={opened} onClose={onClose}>
    {children}
  </Modal>
);

/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

import { FC } from "react";
import { Button } from "components/ui";
import { Modal } from "@components/atoms/Modal";

type ConfirmPromptPresenterProps = {
  title: string;
  children: React.ReactNode;
  opened: boolean;
  onClose: () => void;
  doneOnClickHandler: () => void;
};

export const ConfirmPromptPresenter: FC<ConfirmPromptPresenterProps> = ({
  title,
  children,
  opened,
  onClose,
  doneOnClickHandler,
}) => (
  <Modal opened={opened} onClose={onClose}>
    <div className={"grid grid-cols-2 "}>
      <div className={"col-span-2 text-center text-xl"}>{title}</div>
      <div className={"col-span-2"}>{children}</div>
      <Button colorType={"done"} onClick={doneOnClickHandler} />
      <Button colorType={"cancel"} onClick={onClose} />
    </div>
  </Modal>
);
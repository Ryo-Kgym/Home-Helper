/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

import { FC } from "react";
import { ConfirmPromptPresenter } from "./ConfirmPromptPresenter";

type ConfirmPromptContainerProps = {
  title: string;
  children: React.ReactNode;
  opened: boolean;
  onClose: () => void;
  doneOnClickHandler: () => void;
};

export const ConfirmPromptContainer: FC<ConfirmPromptContainerProps> = ({
  title,
  children,
  opened,
  onClose,
  doneOnClickHandler,
}) => {
  return (
    <ConfirmPromptPresenter
      title={title}
      opened={opened}
      onClose={onClose}
      doneOnClickHandler={doneOnClickHandler}
    >
      {children}
    </ConfirmPromptPresenter>
  );
};

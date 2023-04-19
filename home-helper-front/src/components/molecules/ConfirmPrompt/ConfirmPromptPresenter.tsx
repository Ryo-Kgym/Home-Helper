import { FC, ReactNode } from "react";
import { Button } from "@components/atoms/Button";
import { Modal } from "@components/atoms/Modal";

type ConfirmPromptPresenterProps = {
  title: string;
  children: ReactNode;
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
  <Modal opened={opened} onClose={onClose} size={"50%"}>
    <div className={"grid grid-cols-2 "}>
      <div className={"col-span-2 text-center text-xl"}>{title}</div>
      <div className={"col-span-2"}>{children}</div>
      <Button colorType={"done"} onClick={doneOnClickHandler} />
      <Button colorType={"cancel"} onClick={onClose} />
    </div>
  </Modal>
);

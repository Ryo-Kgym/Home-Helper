import { useState } from "react";
import { Modal } from "@components/atoms/Modal";
import { SignUp } from "@components/organisms/sign_up";
import { AuthButtonPresenter } from "@components/molecules/AuthButton/AuthButtonPresenter";

export const SignUpButtonContainer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const label = "Sign Up";
  const onClickHandler = () => setIsOpen(true);

  return (
    <>
      <AuthButtonPresenter label={label} onClickHandler={onClickHandler} />
      <Modal opened={isOpen} onClose={() => setIsOpen(false)}>
        <SignUp />
      </Modal>
    </>
  );
};

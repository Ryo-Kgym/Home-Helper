import { LoginButton } from "@components/molecules/LoginButton";
import { useState } from "react";
import { Modal } from "@components/atoms/Modal";
import { SignUp } from "@components/organisms/sign_up";

export const SignUpButtonContainer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const label = "Sign Up";
  const onClickHandler = () => setIsOpen(true);

  return (
    <>
      <LoginButton label={label} onClickHandler={onClickHandler} />
      <Modal opened={isOpen} onClose={() => setIsOpen(false)}>
        <SignUp />
      </Modal>
    </>
  );
};

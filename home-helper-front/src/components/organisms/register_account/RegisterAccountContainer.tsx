import { RegisterAccountPresenter } from "./RegisterAccountPresenter";
import { FC, useState } from "react";
import { useCreateAccount } from "@hooks/household/account/useCreateAccount";

type RegisterAccountContainerProps = {};

export const RegisterAccountContainer: FC<
  RegisterAccountContainerProps
> = () => {
  const [accountName, setAccountName] = useState<string>("");
  const [displayOrder, setDisplayOrder] = useState<number | "">(0);

  const { registerAccount } = useCreateAccount({
    accountName,
    displayOrder: displayOrder === "" ? 0 : displayOrder,
  });

  const accountRegisterHandler = () => {
    registerAccount();
  };

  const clearInputHandler = () => {
    setAccountName("");
    setDisplayOrder(0);
  };
  return (
    <RegisterAccountPresenter
      accountName={accountName}
      setAccountName={setAccountName}
      displayOrder={displayOrder}
      setDisplayOrder={setDisplayOrder}
      accountRegisterHandler={accountRegisterHandler}
      clearInputHandler={clearInputHandler}
    />
  );
};

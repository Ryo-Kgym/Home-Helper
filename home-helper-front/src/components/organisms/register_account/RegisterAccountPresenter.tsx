import { FC, ReactNode } from "react";
import { AccountNameInput } from "@components/molecules/CustomTextInput/AccountName";
import { Button } from "@components/atoms/Button";
import { DisplayOrderInput } from "@components/molecules/CustomNumberInput/DisplayOrder";

type RegisterAccountPresenterProps = {
  accountName: string;
  setAccountName: (accountName: string) => void;
  displayOrder: number | "";
  setDisplayOrder: (displayOrder: number | "") => void;
  accountRegisterHandler: () => void;
  clearInputHandler: () => void;
};
export const RegisterAccountPresenter: FC<RegisterAccountPresenterProps> = ({
  accountName,
  setAccountName,
  displayOrder,
  setDisplayOrder,
  accountRegisterHandler,
  clearInputHandler,
}) => (
  <div>
    <Field>
      <AccountNameInput
        accountName={accountName}
        setAccountName={setAccountName}
      />
    </Field>
    <Field>
      <DisplayOrderInput value={displayOrder} onChange={setDisplayOrder} />
    </Field>
    <Button onClick={accountRegisterHandler} colorType={"register"} />
    <Button onClick={clearInputHandler} colorType={"clear"} />
  </div>
);

const Field = ({ children }: { children: ReactNode }) => (
  <div className={"py-2"}>{children}</div>
);

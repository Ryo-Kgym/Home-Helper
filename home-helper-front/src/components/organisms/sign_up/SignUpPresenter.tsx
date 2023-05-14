import { FC, ReactNode } from "react";
import { EmailInput } from "@components/molecules/CustomTextInput/Email";
import { UserNameInput } from "@components/molecules/CustomTextInput/UserName";
import { Button } from "@components/atoms/Button";

type SignUpPresenterProps = {
  email: string;
  setEmail: (email: string) => void;
  emailDisabled: boolean;
  userName: string;
  setUserName: (userName: string) => void;
  registerHandler: () => void;
};

export const SignUpPresenter: FC<SignUpPresenterProps> = ({
  email,
  setEmail,
  emailDisabled,
  userName,
  setUserName,
  registerHandler,
}) => (
  <div className={"grid grid-col-1"}>
    <Field>
      <EmailInput email={email} setEmail={setEmail} disabled={emailDisabled} />
    </Field>
    <Field>
      <UserNameInput userName={userName} setUserName={setUserName} />
    </Field>
    <Button colorType={"register"} onClick={registerHandler} />
  </div>
);

const Field = ({ children }: { children: ReactNode }) => (
  <div className={"py-2"}>{children}</div>
);

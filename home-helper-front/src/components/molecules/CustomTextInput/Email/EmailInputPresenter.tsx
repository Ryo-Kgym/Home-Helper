import { TextInput } from "@components/atoms/TextInput";
import { FC } from "react";

type EmailInputPresenterProps = {
  email: string;
  setEmail: (email: string) => void;
};

export const EmailInputPresenter: FC<EmailInputPresenterProps> = ({
  email,
  setEmail,
}) => (
  <TextInput
    label={"E-mail"}
    value={email}
    onChange={setEmail}
    placeholder={"xxx@yyy.zzz"}
    withAsterisk={true}
    maxLength={256}
  />
);

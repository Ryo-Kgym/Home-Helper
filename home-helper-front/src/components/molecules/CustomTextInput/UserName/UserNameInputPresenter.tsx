import { TextInput } from "@components/atoms/TextInput";
import { FC } from "react";

type UserNameInputPresenterProps = {
  userName: string;
  setUserName: (userName: string) => void;
};

export const UserNameInputPresenter: FC<UserNameInputPresenterProps> = ({
  userName,
  setUserName,
}) => (
  <TextInput
    label={"user name"}
    value={userName}
    onChange={setUserName}
    withAsterisk={true}
    maxLength={256}
  />
);

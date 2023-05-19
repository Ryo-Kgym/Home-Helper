import { LoginPresenter } from "./LoginPresenter";
import { useMessage } from "@hooks/message/useMessage";
import { useEffect, useState } from "react";

export const LoginContainer = () => {
  const [message, setMessage] = useState<string | undefined>(undefined);
  const { first } = useMessage();

  useEffect(() => {
    setMessage(first);
  }, []);

  return <LoginPresenter message={message} />;
};

import { FC, ReactNode } from "react";
import { LoginButton } from "@components/molecules/AuthButton";

type LoginPresenterProps = {
  message: string | undefined;
};

export const LoginPresenter: FC<LoginPresenterProps> = ({ message }) => (
  <div className="flex flex-col items-center justify-center min-h-screen py-2">
    <Title />
    <ButtonArea>
      <LoginButton />
    </ButtonArea>
    {message && <p className={"p-4 text-red-500"}>{message}</p>}
  </div>
);

const Title = () => <h1 className="text-6xl font-bold">Welcome to My Apps!</h1>;

const ButtonArea = ({ children }: { children: ReactNode | ReactNode[] }) => (
  <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
    {children}
  </div>
);

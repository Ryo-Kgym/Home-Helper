import { FC, ReactNode } from "react";
import { GoogleLoginButton } from "@components/molecules/LoginButton";
import { SignUp } from "@components/molecules/LoginButton/SignUp";

type LoginPresenterProps = {
  message: string | undefined;
  nonRegisteredUser: boolean;
};

export const LoginPresenter: FC<LoginPresenterProps> = ({
  message,
  nonRegisteredUser,
}) => (
  <div className="flex flex-col items-center justify-center min-h-screen py-2">
    <Title />
    <LoginButtonArea>
      {!nonRegisteredUser && (
        <>
          <GoogleLoginButton />
        </>
      )}
      <SignUp />
    </LoginButtonArea>
    {message && <p className={"p-4 text-red-500"}>{message}</p>}
  </div>
);

const Title = () => <h1 className="text-6xl font-bold">Welcome to My Apps!</h1>;

const LoginButtonArea = ({
  children,
}: {
  children: ReactNode | ReactNode[];
}) => (
  <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
    {children}
  </div>
);

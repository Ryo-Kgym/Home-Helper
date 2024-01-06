/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { LoginButton } from "@components/molecules/AuthButton";
import { ReactNode } from "react";

type LoginPresenterProps = {
  message: string | undefined;
};

export const LoginPresenter = ({ message }: LoginPresenterProps) => (
  <div className="flex flex-col items-center justify-center min-h-screen py-2">
    <Title />
    <ButtonArea>
      <LoginButton />
    </ButtonArea>
    {message && <p className={"p-4 text-red-500"}>{message}</p>}
  </div>
);

const Title = () => (
  <h1 className="text-6xl font-bold">うちのアプリへ ようこそ！</h1>
);

const ButtonArea = ({ children }: { children: ReactNode | ReactNode[] }) => (
  <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
    {children}
  </div>
);

/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

import { FC } from "react";

type FramePresenterProps = {
  children: React.ReactNode;
  onClickHandler: () => void;
};

export const FramePresenter: FC<FramePresenterProps> = ({
  children,
  onClickHandler,
}) => (
  <div
    className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
    onClick={onClickHandler}
  >
    {children}
  </div>
);

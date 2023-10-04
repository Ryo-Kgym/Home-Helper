/*
 * Copyright (c) 2023 Ryo-Kgym.
 */
"use client";

import { Modal } from "@components/atoms/Modal";
import { useState } from "react";
import { RegisterDailyDetail } from "@components/organisms/register_daily_detail";

export const RegisterDailyButton = ({ date = new Date() }: { date?: Date }) => {
  const [opened, setOpened] = useState<boolean>(false);

  return (
    <div>
      <div
        className={
          "text-5xl text-center cursor-pointer border-2 border-green-300 rounded-full w-13 h-13 shadow bg-green-300 hover:bg-green-400 hover:shadow-md hover:text-white"
        }
        onClick={() => setOpened(true)}
      >
        ＋
      </div>
      <Modal opened={opened} onClose={() => setOpened(false)}>
        <RegisterDailyDetail date={date} />
      </Modal>
    </div>
  );
};

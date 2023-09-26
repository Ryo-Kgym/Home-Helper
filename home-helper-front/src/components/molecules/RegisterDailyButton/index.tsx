/*
 * Copyright (c) 2023 Ryo-Kgym.
 */
"use client";

import { Modal } from "@components/atoms/Modal";
import { useState } from "react";
import { RegisterDailyDetail } from "@components/organisms/register_daily_detail";
import { Button } from "@components/atoms/Button";

export const RegisterDailyButton = ({ date = new Date() }: { date?: Date }) => {
  const [opened, setOpened] = useState<boolean>(false);

  return (
    <div className={"z-10 absolute bottom-5 left-5 "}>
      <Button colorType={"register"} onClick={() => setOpened(true)} />
      <Modal opened={opened} onClose={() => setOpened(false)}>
        <RegisterDailyDetail date={date} />
      </Modal>
    </div>
  );
};

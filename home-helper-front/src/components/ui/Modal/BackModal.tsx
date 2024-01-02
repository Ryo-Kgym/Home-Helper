/*
 * Copyright (c) 2023 Ryo-Kgym.
 */
"use client";

import { Modal } from "@components/atoms/Modal";
import { ReactNode } from "react";
import { useRouter } from "next/navigation";

export const BackModal = ({ children }: { children: ReactNode }) => {
  const { back } = useRouter();

  return (
    <Modal opened={true} onClose={back}>
      {children}
    </Modal>
  );
};

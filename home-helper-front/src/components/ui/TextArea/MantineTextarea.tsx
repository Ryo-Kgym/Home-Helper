/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { Textarea } from "@mantine/core";
import { ChangeEvent } from "react";
import { MantineSize } from "@mantine/styles";

export const MantineTextarea = ({
  label,
  value,
  setValue,
  placeholder,
  withAsterisk,
  size = "lg",
  disabled = false,
}: {
  label: string;
  value: string;
  setValue: (_: string) => void;
  placeholder?: string;
  withAsterisk?: boolean;
  size?: MantineSize;
  disabled?: boolean;
}) => (
  <Textarea
    label={label}
    value={value}
    onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
      setValue(event.currentTarget.value);
    }}
    placeholder={placeholder}
    withAsterisk={withAsterisk}
    size={size}
    disabled={disabled}
  />
);
